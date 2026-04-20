import { JSDOM } from "jsdom";
import IMetadata from "./types/metadata";
import MetaDataBuilder from "./types/metadatabuilder";
import MyError from "../../types/Error";

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

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
         throw new MyError(400, "Unsupported URL protocol");
      }

      const controller = new AbortController();
      timeout = setTimeout(() => {
         timedOut = true;
         controller.abort();
      }, 10000);

      const response = await fetch(parsedUrl.toString(), {
         signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!response.ok) {
         throw new MyError(502, `Metadata fetch failed with ${response.status}`);
      }

      const html = await response.text();
      const builder = new MetaDataBuilder();
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

      const metadata = builder.build();

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
