import { JSDOM } from "jsdom";
import fetch from "node-fetch";

const fetchMetaData = (url: string) => {
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
            const dom = new JSDOM(html);
            const document = dom.window.document;
            document.querySelectorAll("meta").forEach((element) => {
               console.log(element.getAttribute("property"));
            });
            return dom;
         }
      });
};

export default fetchMetaData;
