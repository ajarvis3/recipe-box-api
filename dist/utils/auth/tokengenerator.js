"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.secret, {
        expiresIn: 86400, // expires in 24 hours
    });
    return token;
};
exports.default = getToken;
//# sourceMappingURL=tokengenerator.js.map