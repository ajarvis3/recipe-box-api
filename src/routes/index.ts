import * as express from "express";
import * as path from "path";
import createError from "http-errors";
import authRouter from "./auth/index.js";
import contentRouter from "./content/index.js"; // this one doesn't work without index for some reason
import usersRouter from "./users/index.js";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/content", contentRouter);

router.get("/liveness", (req, res) => {
   res.status(200).send();
});

router.use((req, res, next) => {
   if (
      req.path.startsWith("/auth") ||
      req.path.startsWith("/users") ||
      req.path.startsWith("/content")
   ) {
      next(createError(404, "Route not found"));
      return;
   }

   next();
});

/* GET home page. */
router.get(["/", "**"], (req, res) => {
   const pth = path.join(__dirname, "../../public", "index.html");
   res.sendFile(pth);
});

const indexRouter = router;
export default indexRouter;
