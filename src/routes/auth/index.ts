import signinRouter from "./signin.js";
import verifyRouter from "./verify.js";
import * as express from "express";

const router = express.Router();

router.use("/signin", signinRouter);
router.use("/verify", verifyRouter);

const authRouter = router;
export default authRouter;
