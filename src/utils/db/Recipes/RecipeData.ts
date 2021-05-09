import IRecipe from "../../../models/types/recipe";
import Recipe from "../../../models/recipe";
import { v4 as uuidv4 } from "uuid";
import IMetadata from "../../../utils/metadata/types/metadata";

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
      return Recipe.findOneAndDelete({ _id: id });
   };

   updateRecipe = (recipe: IRecipe) => {
      const document = Recipe.findOneAndUpdate(
         { _id: recipe._id },
         recipe
      ).then((updatedRecipe: IRecipe) => {
         return this.findRecipeById(recipe._id);
      });
      return document;
   };

   findRecipesByUserId = (id: string) => {
      return Recipe.find({ userUuid: id });
   };

   findRecipeById = (id: string) => {
      return Recipe.findOne({ _id: id }).cursor().next();
   };
}

export default new RecipeData();
