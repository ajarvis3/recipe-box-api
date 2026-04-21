import { JSDOM } from "jsdom";
import IMetadata from "./types/metadata.js";
import MetaDataBuilder from "./types/metadatabuilder.js";
import MyError from "../../types/Error.js";
import {
   pullRecipeFromUrl,
   pullRecipeMetadataFromUrl,
} from "../../services/GoogleGenAi.js";

const OPEN_GRAPH_PROPERTIES = new Set([
   "og:title",
   "og:site_name",
   "og:url",
   "og:description",
   "og:image",
]);

const fetchMetaData = async (url: string): Promise<IMetadata | null> => {
   let timedOut = false;
   let timeout: ReturnType<typeof setTimeout> | undefined;

   try {
      const parsedUrl = new URL(url);
      console.log("Parsed URL:", parsedUrl);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
         throw new MyError(400, "Unsupported URL protocol");
      }

      const controller = new AbortController();
      timeout = setTimeout(() => {
         timedOut = true;
         controller.abort();
      }, 10000);

      console.log("Fetching metadata from URL:", parsedUrl.toString());
      const response = await fetch(parsedUrl.toString(), {
         signal: controller.signal,
      });
      clearTimeout(timeout);

      console.log("Fetch response status:", response.status);
      const builder = new MetaDataBuilder();
      if (response.ok) {
         const html = await response.text();
         const dom = new JSDOM(html);
         const document = dom.window.document;

         for (const element of Array.from(document.querySelectorAll("meta"))) {
            const propertyName = element.getAttribute("property");
            const value = element.getAttribute("content");

            if (
               propertyName &&
               value &&
               OPEN_GRAPH_PROPERTIES.has(propertyName)
            ) {
               builder.setProperty(propertyName, value);
            }
         }
      }

      // This would be cleaner checking the builder
      // returning the builder from llm as a fallback
      // the getting the ingredients, etc.
      // and then building the metadata object from that builder
      // but that's a later problem
      let metadata = builder.build();
      console.log("Extracted metadata from Open Graph tags:", metadata);
      if (
         metadata.title === "" &&
         metadata.source === "" &&
         metadata.url === ""
      ) {
         console.log(
            "No Open Graph metadata found, falling back to LLM extraction",
         );
         metadata = await pullRecipeMetadataFromUrl(url);
         console.log("Metadata extracted from LLM:", metadata);
      }
      const ingredientsAndInstructions: string = await pullRecipeFromUrl(url);
      console.log(
         "Ingredients and instructions extracted from LLM:",
         ingredientsAndInstructions,
      );
      const newDescription = metadata.description
         ? `${metadata.description}\n\n${ingredientsAndInstructions}`
         : ingredientsAndInstructions;
      metadata = {
         ...metadata,
         description: newDescription,
      };

      if (
         metadata.title !== "" &&
         metadata.source !== "" &&
         metadata.url !== ""
      ) {
         console.log("Metadata is complete, returning metadata");
         return metadata;
      }

      return metadata.title || metadata.source || metadata.url
         ? metadata
         : null;
   } catch (error) {
      if (timedOut) {
         throw new MyError(504, "Metadata fetch timed out");
      }

      if (error instanceof MyError) {
         throw error;
      }

      if (error instanceof TypeError) {
         throw new MyError(400, "Invalid URL");
      }

      throw new MyError(502, "Unable to fetch metadata");
   } finally {
      if (timeout) {
         clearTimeout(timeout);
      }
   }
};

export default fetchMetaData;
