/**
 * Model for a user in Mongo Database
 */

import mongoose from "mongoose";
import crypto from "crypto";

const KEY_LEN = 32;
const ITERATIONS = 10000;

interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  salt: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  firstName: String,
  lastName: String,
  email: String,
  passwordHash: String,
  salt: String,
});

UserSchema.methods.setPassword = function (pw: string) {
  this.salt = crypto.randomBytes(KEY_LEN).toString("hex");
  this.passwordHash = crypto
    .pbkdf2Sync(pw, this.salt, ITERATIONS, KEY_LEN, "sha512")
    .toString("hex");
};

UserSchema.methods.verifyUser = function (pw: string) {
  const hash = crypto
    .pbkdf2Sync(pw, this.salt, ITERATIONS, KEY_LEN, "sha512")
    .toString("hex");
  return this.passwordHash == hash;
};

const User: mongoose.Model<IUser> = mongoose.model("User", UserSchema);
export default User;
