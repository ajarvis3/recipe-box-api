"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const hashPassword = (password, salt) => {
    return crypto_1.default.pbkdf2Sync(password, salt, 1000, 32, "sha512").toString("hex");
};
exports.default = hashPassword;
// rule of threes: use three times, make it a function
// avoid lots of params
// short functions
// encapsulating logic for some routes
// create a class that handles users in database
// consistency
// refactor existing code BEFORE building new things
// do some planning about dashboard
// fetch meta data for next week
//    information is standardized
//    identify popular websites, check to see that it works
//# sourceMappingURL=hashing.js.map