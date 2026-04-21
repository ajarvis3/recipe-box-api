import { Router } from "express";
import MyError from "../../types/Error.js";
import checkToken from "../../utils/auth/tokenchecker.js";
import fetchMetaData from "../../utils/metadata/fetchmetadata.js";
import RecipeData from "../../utils/db/Recipes/RecipeData.js";
import checkRecipe from "./checkRecipe.js";
import IRecipe from "../../models/types/recipe.js";
import jwt from "jsonwebtoken";
import IAuthRequest from "../../utils/auth/types/authrequest.js";
import ApplicationToken from "../../utils/auth/types/ApplicationToken.js";
import mongoose from "mongoose";

const router = Router();

/* POST Recipe Data */
router.post("/", checkToken, async (req: IAuthRequest, res, next) => {
   try {
      const { url } = req.body as { url?: string };

      if (typeof url !== "string" || !url.trim()) {
         throw new MyError(400, "Missing recipe URL");
      }

      const data = await fetchMetaData(url);

      if (!data) {
         throw new MyError(422, "Unable to extract recipe metadata");
      }

      console.log(req.token);
      if (!req.token) {
         throw new MyError(401, "Unauthorized");
      }

      const decodedToken = jwt.decode(req.token) as ApplicationToken | null;

      if (!decodedToken) {
         throw new MyError(401, "Unauthorized");
      }

      const userId = "id" in decodedToken ? decodedToken.id : decodedToken.sub;
      const recipe: IRecipe = await RecipeData.createAndSaveRecipe(
         data,
         userId,
      );

      res.status(201).json(recipe);
   } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
         next(new MyError(400, "Invalid recipe data", error.message));
         return;
      }

      if (
         typeof error === "object" &&
         error !== null &&
         "code" in error &&
         (error as { code?: number }).code === 11000
      ) {
         next(new MyError(409, "Recipe already exists"));
         return;
      }

      next(error);
   }
});

/* PATCH /content/recipes?id=<uuid> */
router.patch("/", checkRecipe, async (req, res, next) => {
   try {
      const { recipe } = req.body as { recipe?: IRecipe };

      if (!recipe || typeof recipe._id !== "string") {
         throw new MyError(400, "Missing recipe payload");
      }

      if (req.query.id !== recipe._id) {
         throw new MyError(400, "Recipe id mismatch");
      }

      const recipeResult = await RecipeData.updateRecipe(recipe);

      if (!recipeResult) {
         throw new MyError(404, "Recipe not found");
      }

      res.json(recipeResult);
   } catch (error) {
      next(error);
   }
});

/* GET /content/recipes?id=<uuid> */
router.get("/", checkRecipe, async (req, res, next) => {
   try {
      if (typeof req.query.id === "string") {
         const recipe = await RecipeData.findRecipeById(req.query.id);

         if (!recipe) {
            throw new MyError(404, "Recipe not found");
         }

         res.status(200).json(recipe);
         return;
      }

      if (typeof req.query.uid === "string") {
         const recipes = await RecipeData.findRecipesByUserId(req.query.uid);
         res.status(200).json(recipes);
         return;
      }

      throw new MyError(400, "Missing recipe identifier");
   } catch (error) {
      next(error);
   }
});

/* DELETE /content/recipes?id=<uuid> */
router.delete("/", checkRecipe, async (req, res, next) => {
   try {
      if (typeof req.query.id !== "string") {
         throw new MyError(400, "Missing recipe identifier");
      }

      console.log("Deleting recipe with id:", req.query.id);

      const recipe = await RecipeData.deleteRecipeById(req.query.id);

      if (!recipe) {
         throw new MyError(404, "Recipe not found");
      }

      res.status(200).json(recipe);
   } catch (error) {
      next(error);
   }
});

const recipesRouter = router;
export default recipesRouter;
