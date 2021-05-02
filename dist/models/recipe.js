"use strict";
/**
 * Model for a recipe in Mongo Database
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RecipeSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    source: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    url: {
        type: String,
        required: true,
    },
    timeCreated: {
        type: Number,
        required: true,
    },
    tags: [{ type: String }],
    comments: [{ type: String }],
    userUuid: {
        type: String,
        require: true,
    },
}, { _id: false });
RecipeSchema.methods.addTag = function (tag) {
    this.tags.push(tag);
};
RecipeSchema.methods.addComment = function (comment) {
    this.comments.push(comment);
};
const User = mongoose_1.default.model("User", RecipeSchema);
exports.default = User;
//# sourceMappingURL=recipe.js.map