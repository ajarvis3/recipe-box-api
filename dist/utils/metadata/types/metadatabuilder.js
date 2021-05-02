"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetaDataBuilder {
    constructor() {
        this.source = this.author = this.title = this.description = this.imageUrl = this.url =
            "";
    }
    setProperty(property, value) {
        switch (property) {
            case "og:title":
                this.title = value;
                break;
            case "og:site_name":
                this.source = value;
                break;
            case "og:url":
                this.url = value;
                break;
            case "og:description":
                this.description = value;
                break;
            case "og:image":
                this.imageUrl = value;
                break;
        }
    }
    build() {
        return {
            source: this.source,
            author: this.author,
            title: this.title,
            description: this.description,
            imageUrl: this.imageUrl,
            url: this.url,
        };
    }
}
exports.default = MetaDataBuilder;
//# sourceMappingURL=metadatabuilder.js.map