import * as express from "express";
import { JSDOM } from "jsdom";
import MyError from "../../types/Error";
import checkToken from "../../utils/auth/tokenchecker";
import fetchMetaData from "../../utils/metadata/fetchmetadata";

const router = express.Router();

/* POST Recipe Data */
router.post("/", checkToken, (req, res, next) => {
   const url = req.body.url;
   fetchMetaData(url).then((data: JSDOM | undefined) => {
      if (data) {
         res.setHeader("Content-Type", "text/plain");
         res.send(data);
      } else {
         const err = new MyError(401, "Unauthorized");
         next(err);
      }
   });
});

/* PATCH /content/recipes?id=<uuid> */
router.patch("/:id", (req, res, next) => {
   res.send("recipes patch");
});

/* GET /content/recipes?id=<uuid> */
router.get("/", (req, res, next) => {
   res.send("recipes get");
});

/* DELETE /content/recipes?id=<uuid> */
router.delete("/", (req, res, next) => {
   res.send("recipes delete");
});

const recipesRouter = router;
export default recipesRouter;
