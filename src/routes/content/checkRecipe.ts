import { NextFunction } from "express";
import IAuthRequest from "../../utils/auth/types/authrequest";
import checkToken from "../../utils/auth/tokenchecker";
import jwt from "jsonwebtoken";
import IUserToken from "../../utils/auth/types/usertoken";
import IRecipe from "../../models/types/recipe";
import RecipeData from "../../utils/db/Recipes/RecipeData";

const checkRecipe = (req: IAuthRequest, res: any, next: NextFunction) => {
   console.log("check recipe");
   console.log(req.query.id);
   // let recipeId = "";
   // if (!req.body) {
   //    recipeId = req.query.id as string;
   // }
   const recipeId =
      (req.query.id as string) || req.body?.recipe
         ? (req.body?.recipe as IRecipe)?.id
         : undefined;
   console.log(req.query, recipeId);
   checkToken(req, res, () => {
      if (!recipeId) {
         next();
      } else {
         const decodedToken = jwt.decode(req.token) as IUserToken;
         RecipeData.findRecipeById(recipeId).then((recipe) => {
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
