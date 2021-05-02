/**
 * Model for a user in Mongo Database
 */

import mongoose from "mongoose";
import getSalt from "../utils/auth/salting";
import hashPassword from "../utils/auth/hashing";
import IUser from "./types/user";

const UserSchema = new mongoose.Schema<IUser>(
   {
      _id: {
         type: String,
         required: true,
         unique: true,
      },
      firstName: {
         type: String,
         required: true,
      },
      lastName: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      passwordHash: {
         type: String,
         required: true,
      },
      salt: {
         type: String,
         required: true,
      },
      timeCreated: {
         type: Number,
         required: true,
      },
   },
   { _id: false }
);

UserSchema.methods.setPassword = function (password: string) {
   this.salt = getSalt();
   this.passwordHash = hashPassword(password, this.salt);
};

UserSchema.methods.verifyUser = function (password: string) {
   const hash = hashPassword(password, this.salt);
   return this.passwordHash === hash;
};

const User: mongoose.Model<IUser> = mongoose.model("User", UserSchema);
export default User;
