"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const node_fetch_1 = __importDefault(require("node-fetch"));
const metadatabuilder_1 = __importDefault(require("./types/metadatabuilder"));
// maybe add image width and height too
const fetchMetaData = (url) => {
    const search = [
        "og:title",
        "og:site_name",
        "og:url",
        "og:description",
        "og:image",
    ];
    // switch this to env at some point
    return node_fetch_1.default(url)
        .then((value) => {
        return value.text();
    }, (err) => {
        console.error(err);
    })
        .then((html) => {
        if (html) {
            const builder = new metadatabuilder_1.default();
            const dom = new jsdom_1.JSDOM(html);
            const document = dom.window.document;
            document.querySelectorAll("meta").forEach((element) => {
                const index = search.indexOf(element.getAttribute("property"));
                if (index !== -1) {
                    const propertyName = element.getAttribute("property");
                    const value = element.getAttribute("content");
                    builder.setProperty(propertyName, value);
                }
            });
            console.log(builder.build());
            return dom;
        }
    });
};
exports.default = fetchMetaData;
//# sourceMappingURL=fetchmetadata.js.map