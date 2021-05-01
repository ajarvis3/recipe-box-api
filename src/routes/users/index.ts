import signupRouter from "./signup";
import * as express from "express";

const router = express.Router();

router.use("/signup", signupRouter);

const usersRouter = router;
export default usersRouter;
