/**
 * Model for a user in Mongo Database
 */

import mongoose from "mongoose";
import IOAuthUser from "./types/oauth.js";

const UserSchema = new mongoose.Schema<IOAuthUser>(
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

const OAuthUser: mongoose.Model<IOAuthUser> = mongoose.model("User", UserSchema);
export default OAuthUser;
