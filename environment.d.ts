declare global {
   namespace NodeJS {
      interface ProcessEnv {
         NODE_ENV: "developemt" | "production";
         DBNAME: string;
         DB_HOST: string;
         DB_PORT: string;
         DBU_USER: string;
         DB_PASSWORD: string;
      }
   }
}

export {};
