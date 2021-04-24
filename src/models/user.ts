/**
 * Model for a user in Mongo Database
 */

import mongoose from "mongoose";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const KEY_LEN = 32;
const ITERATIONS = 10000;

interface IUser extends mongoose.Document {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  salt: string;
  dateCreated: number;
  setUuid: () => void;
  setDateCreated: () => void;
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
  dateCreated: {
    type: Number,
    required: true,
  },
});

UserSchema.methods.setUuid = function () {
  this.uuid = uuidv4();
};

UserSchema.methods.setDateCreated = function () {
  this.dateCreated = Date.now();
};

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
  return this.passwordHash === hash;
};

const User: mongoose.Model<IUser> = mongoose.model("User", UserSchema);
export default User;
