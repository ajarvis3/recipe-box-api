import * as express from "express";

const router = express.Router();

/* POST User Data */
router.post("/", (req, res, next) => {
   res.send("tags post");
});

/* GET /content/recipes?id=<uuid> */
router.get("/", (req, res, next) => {
   res.send("tags get");
});

/* DELETE /content/recipes?id=<uuid> */
router.delete("/", (req, res, next) => {
   res.send("tags delete");
});

const tagsRouter = router;
export default tagsRouter;
