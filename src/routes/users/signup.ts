import * as express from "express";
import * as path from "path";

const router = express.Router();

/* POST signup data */
router.get("/", (req, res, next) => {
  console.log("post");
  res.setHeader("Content-Type", "application/json");
  res.json({ blerg: "recipes post" });
});

const indexRouter = router;
export default indexRouter;
