import IMetadata from "./metadata";

class MetaDataBuilder {
  source: string;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;

  constructor() {
    this.source = this.author = this.title = this.description = this.imageUrl = this.url =
      "";
  }

  setProperty(property: string, value: string) {
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

  build(): IMetadata {
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

export default MetaDataBuilder;
