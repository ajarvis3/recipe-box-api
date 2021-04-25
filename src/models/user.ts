/**
 * Model for a user in Mongo Database
 */

import mongoose from "mongoose";
import getSalt from "../utils/auth/salting";
import hashPassword from "../utils/auth/hashing";

interface IUser extends mongoose.Document {
   uuid: string;
   firstName: string;
   lastName: string;
   email: string;
   passwordHash: string;
   salt: string;
   timeCreated: number;
   setPassword: (pw: string) => void;
   verifyUser: (pw: string) => boolean;
}

const UserSchema = new mongoose.Schema<IUser>({
   uuid: {
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
});

UserSchema.methods.setPassword = function (pw: string) {
   this.salt = getSalt();
   this.passwordHash = hashPassword(pw, this.salt);
};

UserSchema.methods.verifyUser = function (pw: string) {
   const hash = hashPassword(pw, this.salt);
   return this.passwordHash === hash;
};

const User: mongoose.Model<IUser> = mongoose.model("User", UserSchema);
export default User;
