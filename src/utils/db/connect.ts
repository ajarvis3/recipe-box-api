import mongoose from "mongoose";
import dotenv from "dotenv";

interface IAuth {
   [key: string]: any;
}

// VS Code reported that process was treated
// as a local variable
// so I'm just passing in the process now
function startMongo(process: NodeJS.Process) {
   dotenv.config();

   const env = process.env.NODE_ENV || "development";

   console.log(env);
   let connString =
      "mongodb://" +
      process.env.DB_HOST +
      ":" +
      process.env.DB_PORT +
      "/" +
      process.env.DBNAME;
   let options: mongoose.ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   };
   if (env === "production") {
      options = {
         ...options,
         user: process.env.DB_USER,
         pass: process.env.DB_PASSWORD,
      };
      connString += "?ssl=true&replicaSet=globaldb&retryWrites=false";
   }
   console.log(process.env.DB_HOST);
   mongoose
      .connect(connString, options)
      .then(() => console.log("Connection to Mongo successful"))
      .catch((err) => console.error(err));
}

const startDb = () => startMongo(process);
export default startDb;
