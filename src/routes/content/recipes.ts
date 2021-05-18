import * as express from "express";
import IMetadata from "../../utils/metadata/types/metadata";
import MyError from "../../types/Error";
import checkToken from "../../utils/auth/tokenchecker";
import fetchMetaData from "../../utils/metadata/fetchmetadata";
import RecipeData from "../../utils/db/Recipes/RecipeData";
import checkRecipe from "./checkRecipe";
import IRecipe from "../../models/types/recipe";
import jwt from "jsonwebtoken";
import IAuthRequest from "../../utils/auth/types/authrequest";
import IUserToken from "../../utils/auth/types/usertoken";

const router = express.Router();

/* POST Recipe Data */
router.post("/", checkToken, (req: IAuthRequest, res, next) => {
   const url = req.body.url;
   fetchMetaData(url).then((data: IMetadata | null) => {
      if (data) {
         const decodedToken = jwt.decode(req.token) as IUserToken;
         RecipeData.createAndSaveRecipe(data, decodedToken.id).then(
            (recipe: IRecipe) => {
               res.setHeader("Content-Type", "application/json");
               res.send(JSON.stringify(recipe));
            }
         );
      } else {
         const err = new MyError(401, "Unauthorized");
         next(err);
      }
   });
});

/* PATCH /content/recipes?id=<uuid> */
router.patch("/", checkRecipe, (req, res, next) => {
   const recipe = req.body.recipe;
   if (req.query.id !== recipe._id) res.status(400).send("Bad Request");
   RecipeData.updateRecipe(recipe).then((recipeResult: any) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(recipeResult));
   });
});

/* GET /content/recipes?id=<uuid> */
router.get("/", checkRecipe, (req, res, next) => {
   if (req.query.id) {
      const id = req.query.id as string;
      RecipeData.findRecipeById(id).then((recipe) => {
         res.status(200).send(JSON.stringify(recipe));
      });
   } else if (req.query.uid) {
      const id = req.query.uid as string;
      RecipeData.findRecipesByUserId(id)
         .then((recipes) => {
            res.status(200).send(JSON.stringify(recipes));
         })
         .catch((err) => {
            // respond with error
            // some status, send
         });
   }
});

/* DELETE /content/recipes?id=<uuid> */
router.delete("/", checkRecipe, (req, res, next) => {
   const id = req.query.id as string;
   console.log("here");
   RecipeData.deleteRecipeById(id).then((recipe) => {
      res.status(200).send(JSON.stringify(recipe));
   });
});

const recipesRouter = router;
export default recipesRouter;
