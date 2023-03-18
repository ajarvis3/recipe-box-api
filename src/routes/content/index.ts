import recipesRouter from "./recipes.js";
import tagsRouter from "./tags.js";
import * as express from "express";

const router = express.Router();

router.use("/recipes", recipesRouter);
router.use("/tags", tagsRouter);

const contentRouter = router;
export default contentRouter;
