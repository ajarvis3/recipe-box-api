import { NextFunction } from "express";
import IAuthRequest from "../../utils/auth/types/authrequest";
import checkToken from "../../utils/auth/tokenchecker";
import jwt from "jsonwebtoken";
import IUserToken from "../../utils/auth/types/usertoken";
import IRecipe from "../../models/types/recipe";
import RecipeData from "../../utils/db/Recipes/RecipeData";
import MyError from "../../types/Error";

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

         const applicationToken = decodedToken as IUserToken;
         const recipe = await RecipeData.findRecipeById(recipeId);

         if (!recipe) {
            throw new MyError(404, "Recipe not found");
         }

         if (applicationToken.id !== recipe.userUuid) {
            throw new MyError(403, "Incorrect credentials");
         }

         next();
      } catch (error) {
         next(error);
      }
   });
};

export default checkRecipe;
