"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const node_fetch_1 = __importDefault(require("node-fetch"));
const fetchMetaData = (url) => {
    // switch this to env at some point
    return node_fetch_1.default(url)
        .then((value) => {
        return value.text();
    }, (err) => {
        console.error(err);
    })
        .then((html) => {
        if (html) {
            const dom = new jsdom_1.JSDOM(html);
            const document = dom.window.document;
            document.querySelectorAll("meta").forEach((element) => {
                console.log(element.getAttribute("property"));
            });
            return dom;
        }
    });
};
exports.default = fetchMetaData;
//# sourceMappingURL=fetchmetadata.js.map