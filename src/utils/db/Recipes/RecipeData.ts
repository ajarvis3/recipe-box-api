import IRecipe from "../../../models/types/recipe.js";
import Recipe from "../../../models/recipe.js";
import { v4 as uuidv4 } from "uuid";
import IMetadata from "../../../utils/metadata/types/metadata.js";

class RecipeData {
   createRecipe = (metadata: IMetadata, userUuid: string) => {
      const _id = uuidv4();
      const timeCreated = Date.now();
      const tags = [] as string[];
      const comments = [] as string[];
      return new Recipe({
         _id,
         timeCreated,
         tags,
         comments,
         userUuid,
         ...metadata,
      });
   };

   saveRecipe = (recipe: IRecipe) => {
      return recipe.save();
   };

   createAndSaveRecipe = (metadata: IMetadata, userUuid: string) => {
      return this.saveRecipe(this.createRecipe(metadata, userUuid));
   };

   deleteRecipeById = (id: string) => {
      console.log("Attempting to delete recipe with id:", id);
      return Recipe.findOneAndDelete({ _id: id }).exec();
   };

   updateRecipe = (recipe: IRecipe) => {
      return Recipe.findOneAndUpdate({ _id: recipe._id }, recipe, {
         new: true,
         runValidators: true,
      }).exec();
   };

   findRecipesByUserId = (id: string) => {
      return Recipe.find({ userUuid: id }).exec();
   };

   findRecipeById = (id: string) => {
      return Recipe.findOne({ _id: id }).exec();
   };
}

export default new RecipeData();
