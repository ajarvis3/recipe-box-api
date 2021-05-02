"use strict";
/**
 * Model for a user in Mongo Database
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const salting_1 = __importDefault(require("../utils/auth/salting"));
const hashing_1 = __importDefault(require("../utils/auth/hashing"));
const UserSchema = new mongoose_1.default.Schema({
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
}, { _id: false });
UserSchema.methods.setPassword = function (password) {
    this.salt = salting_1.default();
    this.passwordHash = hashing_1.default(password, this.salt);
};
UserSchema.methods.verifyUser = function (password) {
    const hash = hashing_1.default(password, this.salt);
    return this.passwordHash === hash;
};
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map