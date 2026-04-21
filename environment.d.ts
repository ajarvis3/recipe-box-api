declare global {
   namespace NodeJS {
      interface ProcessEnv {
         NODE_ENV: "development" | "production";
         DBNAME: string;
         DB_HOST: string;
         DB_PORT: string;
         DB_USER: string;
         DB_PASSWORD: string;
         GOOGLE_CLIENT_ID: string;
         SECRET?: string;
         secret?: string;
      }
   }

   namespace Express {
      interface Request {
         token?: string;
      }
   }
}

export {};
