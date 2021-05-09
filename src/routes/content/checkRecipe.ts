import { NextFunction } from "express";
import IAuthRequest from "../../utils/auth/types/authrequest";
import checkToken from "../../utils/auth/tokenchecker";
import jwt from "jsonwebtoken";
import IUserToken from "../../utils/auth/types/usertoken";
import IRecipe from "../../models/types/recipe";
import RecipeData from "../../utils/db/Recipes/RecipeData";

const checkRecipe = (req: IAuthRequest, res: any, next: NextFunction) => {
   const recipeId =
      (req.query.id as string) || req.body.recipe
         ? (req.body.recipe as IRecipe).id
         : undefined;
   checkToken(req, res, () => {
      if (!recipeId) next();
      const decodedToken = jwt.decode(req.token) as IUserToken;
      RecipeData.findRecipeById(recipeId).then((recipe) => {
         if (decodedToken.id !== recipe.userUuid) {
            res.status(401).send("Incorrect Credentials");
         } else {
            next();
         }
      });
   });
};

export default checkRecipe;
