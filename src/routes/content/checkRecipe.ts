import { NextFunction } from "express";
import IAuthRequest from "../../utils/auth/types/authrequest.js";
import checkToken from "../../utils/auth/tokenchecker.js";
import jwt from "jsonwebtoken";
import IUserToken from "../../utils/auth/types/usertoken.js";
import IRecipe from "../../models/types/recipe.js";
import RecipeData from "../../utils/db/Recipes/RecipeData.js";
import MyError from "../../types/Error.js";
import OAuthData from "../../utils/auth/types/OAuthData.js";

const checkRecipe = (req: IAuthRequest, res: any, next: NextFunction) => {
   const recipeId =
      typeof req.query.id === "string"
         ? req.query.id
         : (req.body?.recipe as IRecipe | undefined)?._id;

   checkToken(req, res, async () => {
      try {
         if (!recipeId) {
            next();
            return;
         }

         if (!req.token) {
            throw new MyError(401, "Unauthorized");
         }

         const decodedToken = jwt.decode(req.token);

         if (!decodedToken || typeof decodedToken === "string") {
            throw new MyError(401, "Unauthorized");
         }

         const applicationToken = decodedToken as IUserToken | OAuthData;
         const recipe = await RecipeData.findRecipeById(recipeId);

         // console.log(applicationToken, recipe);
         if (!recipe) {
            throw new MyError(404, "Recipe not found");
         }

         if (
            "sub" in applicationToken &&
            applicationToken.sub !== recipe.userUuid
         ) {
            throw new MyError(403, "Incorrect credentials");
         }
         if (
            "id" in applicationToken &&
            applicationToken.id !== recipe.userUuid
         ) {
            throw new MyError(403, "Incorrect credentials");
         }

         next();
      } catch (error) {
         next(error);
      }
   });
};

export default checkRecipe;
