import recipesRouter from "./recipes";
import tagsRouter from "./tags";
import * as express from "express";

const router = express.Router();

router.use("/recipes", recipesRouter);
router.use("/tags", tagsRouter);

const contentRouter = router;
export default contentRouter;
