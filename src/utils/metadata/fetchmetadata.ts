import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import IMetadata from "./types/metadata";
import MetaDataBuilder from "./types/metadatabuilder";

// maybe add image width and height too

const fetchMetaData = (url: string) => {
   const search = [
      "og:title",
      "og:site_name",
      "og:url",
      "og:description",
      "og:image",
   ];

   // switch this to env at some point
   return fetch(url)
      .then(
         (value) => {
            return value.text();
         },
         (err) => {
            console.error(err);
         }
      )
      .then((html) => {
         if (html) {
            const builder = new MetaDataBuilder();

            const dom = new JSDOM(html);
            const document = dom.window.document;
            // doesn't work if meta tags generated dynamically
            // https://www.thekitchn.com/sweet-corn-blueberry-muffins-23048122
            document.querySelectorAll("meta").forEach((element) => {
               const index = search.indexOf(element.getAttribute("property"));
               if (index !== -1) {
                  const propertyName = element.getAttribute("property");
                  const value = element.getAttribute("content");
                  builder.setProperty(propertyName, value);
               }
            });
            console.log(builder.build());
            return dom;
         }
      });
};

export default fetchMetaData;
