"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalt = exports.hashPassword = void 0;
var hashing_1 = require("./hashing");
Object.defineProperty(exports, "hashPassword", { enumerable: true, get: function () { return __importDefault(hashing_1).default; } });
var salting_1 = require("./salting");
Object.defineProperty(exports, "getSalt", { enumerable: true, get: function () { return __importDefault(salting_1).default; } });
//# sourceMappingURL=index.js.map