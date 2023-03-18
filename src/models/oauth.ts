/**
 * Model for a user in Mongo Database
 */

import mongoose from "mongoose";
import IOAuthUser from "./types/oauth.js";
import { OAuth2Client } from "google-auth-library";
import IOAuthUserToken from "../utils/auth/types/OAuthData.js";

const OAuthUserSchema = new mongoose.Schema<IOAuthUser>(
   {
      _id: {
         type: String,
      },
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      timeCreated: {
         type: Number,
         required: true,
      },
   },
   { _id: false }
);

OAuthUserSchema.methods.verifyUser = (credentials: string) => {
   const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
   const client = new OAuth2Client(CLIENT_ID);
   return client.verifyIdToken({
      idToken: credentials,
      audience: CLIENT_ID,
   });
};

const OAuthUser: mongoose.Model<IOAuthUser> = mongoose.model(
   "OAuthUser",
   OAuthUserSchema
);
export default OAuthUser;
