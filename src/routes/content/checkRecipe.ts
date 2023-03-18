import { NextFunction } from "express";
import IAuthRequest from "../../utils/auth/types/authrequest.js";
import checkToken from "../../utils/auth/tokenchecker.js";
import jwt from "jsonwebtoken";
import IUserToken from "../../utils/auth/types/usertoken.js";
import IRecipe from "../../models/types/recipe.js";
import RecipeData from "../../utils/db/Recipes/RecipeData.js";

const checkRecipe = (req: IAuthRequest, res: any, next: NextFunction) => {
   const recipeId =
      (req.query.id as string) || req.body?.recipe
         ? (req.body?.recipe as IRecipe)?.id
         : undefined;
   checkToken(req, res, () => {
      if (!recipeId) {
         next();
      } else {
         const decodedToken = jwt.decode(req.token) as IUserToken;
         RecipeData.findRecipeById(recipeId).then((recipe: IRecipe) => {
            if (recipe) {
               if (decodedToken.id !== recipe.userUuid) {
                  res.status(401).send("Incorrect Credentials");
               } else {
                  next();
               }
            } else {
               res.status(400).send("Bad Request");
            }
         });
      }
   });
};

export default checkRecipe;
