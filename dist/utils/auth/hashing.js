"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const hashPassword = (pw, salt) => {
    return crypto_1.default.pbkdf2Sync(pw, salt, 1000, 32, "sha512").toString("hex");
};
exports.default = hashPassword;
//# sourceMappingURL=hashing.js.map