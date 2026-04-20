import { JSDOM } from "jsdom";
import IMetadata from "./types/metadata";
import MetaDataBuilder from "./types/metadatabuilder";

const OPEN_GRAPH_PROPERTIES = new Set([
   "og:title",
   "og:site_name",
   "og:url",
   "og:description",
   "og:image",
]);

const fetchMetaData = async (url: string): Promise<IMetadata | null> => {
   try {
      const response = await fetch(url);

      if (!response.ok) {
         return null;
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

      return builder.build();
   } catch {
      return null;
   }
};

export default fetchMetaData;
