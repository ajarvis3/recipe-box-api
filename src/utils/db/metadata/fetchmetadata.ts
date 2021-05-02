import fetch from "node-fetch";

const fetchMetaData = (url: string) => {
   // switch this to env at some point
   return fetch(url).then(
      (value) => {
         return value.text();
      },
      (err) => {
         console.error(err);
      }
   );
};

export default fetchMetaData;
