import * as express from "express";
import * as path from "path";
import authRouter from "./auth/index.js";
import contentRouter from "./content/index.js"; // this one doesn't work without index for some reason
import usersRouter from "./users/index.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/content", contentRouter);

/* GET home page. */
router.get(["/", "**"], (req, res, next) => {
   const pth = path.join(__dirname, "../../public", "index.html");
   res.sendFile(pth);
});

const indexRouter = router;
export default indexRouter;
