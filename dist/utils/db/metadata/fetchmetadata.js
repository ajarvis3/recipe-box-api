"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fetchMetaData = (url) => {
    // switch this to env at some point
    return node_fetch_1.default(url).then((value) => {
        return value.text();
    }, (err) => {
        console.error(err);
    });
};
exports.default = fetchMetaData;
//# sourceMappingURL=fetchmetadata.js.map