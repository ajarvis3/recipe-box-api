declare global {
   namespace NodeJS {
      interface ProcessEnv {
         NODE_ENV: "developemt" | "production";
         DBNAME: string;
         DB_HOST: string;
         DB_PORT: string;
         DB_USER: string;
         DB_PASSWORD: string;
         GOOGLE_CLIENT_ID: string;
         secret: string;
      }
   }
}

export {};
