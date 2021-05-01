import signinRouter from "./signin";
import verifyRouter from "./verify";
import * as express from "express";

const router = express.Router();

router.use("/signin", signinRouter);
router.use("/verify", verifyRouter);

const authRouter = router;
export default authRouter;
