import { Router } from "express";
import IMetadata from "../../utils/metadata/types/metadata";
import MyError from "../../types/Error";
import checkToken from "../../utils/auth/tokenchecker";
import fetchMetaData from "../../utils/metadata/fetchmetadata";
import RecipeData from "../../utils/db/Recipes/RecipeData";
import checkRecipe from "./checkRecipe";
import IRecipe from "../../models/types/recipe";
import jwt from "jsonwebtoken";
import IAuthRequest from "../../utils/auth/types/authrequest";
import ApplicationToken from "../../utils/auth/types/ApplicationToken";

const router = Router();

/* POST Recipe Data */
router.post("/", checkToken, async (req: IAuthRequest, res, next) => {
   try {
      const { url } = req.body as { url?: string };

      if (!url) {
         res.status(400).send("Bad Request");
         return;
      }

      const data = await fetchMetaData(url);

      if (!data) {
         next(new MyError(401, "Unauthorized"));
         return;
      }

      const decodedToken = jwt.decode(req.token) as ApplicationToken | null;

      if (!decodedToken) {
         next(new MyError(401, "Unauthorized"));
         return;
      }

      const userId =
         "id" in decodedToken ? decodedToken.id : decodedToken.sub;
      const recipe: IRecipe = await RecipeData.createAndSaveRecipe(
         data as IMetadata,
         userId,
      );

      res.json(recipe);
   } catch (error) {
      next(error);
   }
});

/* PATCH /content/recipes?id=<uuid> */
router.patch("/", checkRecipe, async (req, res, next) => {
   try {
      const { recipe } = req.body as { recipe?: IRecipe };

      if (!recipe || req.query.id !== recipe._id) {
         res.status(400).send("Bad Request");
         return;
      }

      const recipeResult = await RecipeData.updateRecipe(recipe);
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
         res.status(200).json(recipe);
         return;
      }

      if (typeof req.query.uid === "string") {
         const recipes = await RecipeData.findRecipesByUserId(req.query.uid);
         res.status(200).json(recipes);
         return;
      }

      res.status(400).send("Bad Request");
   } catch (error) {
      next(error);
   }
});

/* DELETE /content/recipes?id=<uuid> */
router.delete("/", checkRecipe, async (req, res, next) => {
   try {
      if (typeof req.query.id !== "string") {
         res.status(400).send("Bad Request");
         return;
      }

      const recipe = await RecipeData.deleteRecipeById(req.query.id);
      res.status(200).json(recipe);
   } catch (error) {
      next(error);
   }
});

const recipesRouter = router;
export default recipesRouter;
