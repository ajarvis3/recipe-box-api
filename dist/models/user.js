"use strict";
/**
 * Model for a user in Mongo Database
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = __importDefault(require("crypto"));
const KEY_LEN = 32;
const ITERATIONS = 10000;
const UserSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    passwordHash: String,
    salt: String,
});
UserSchema.methods.setPassword = function (pw) {
    this.salt = crypto_1.default.randomBytes(KEY_LEN).toString("hex");
    this.passwordHash = crypto_1.default
        .pbkdf2Sync(pw, this.salt, ITERATIONS, KEY_LEN, "sha512")
        .toString("hex");
};
UserSchema.methods.verifyUser = function (pw) {
    const hash = crypto_1.default
        .pbkdf2Sync(pw, this.salt, ITERATIONS, KEY_LEN, "sha512")
        .toString("hex");
    return this.passwordHash === hash;
};
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map