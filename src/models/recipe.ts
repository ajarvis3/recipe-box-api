/**
 * Model for a recipe in Mongo Database
 */

import mongoose from "mongoose";
import IRecipe from "./types/recipe.js";

const RecipeSchema = new mongoose.Schema<IRecipe>(
   {
      _id: {
         type: String,
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
   },
   { _id: false }
);

RecipeSchema.methods.addTag = function (tag: string) {
   this.tags.push(tag);
};

RecipeSchema.methods.addComment = function (comment: string) {
   this.comments.push(comment);
};

const Recipe: mongoose.Model<IRecipe> = mongoose.model("Recipe", RecipeSchema);
export default Recipe;
