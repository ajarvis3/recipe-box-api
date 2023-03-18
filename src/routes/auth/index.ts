import signinRouter from "./signin";
import verifyRouter from "./verify";
import oauthRouter from "./oauth";
import * as express from "express";

const router = express.Router();

router.use("/signin", signinRouter);
router.use("/verify", verifyRouter);
router.use("/oauth", oauthRouter);

const authRouter = router;
export default authRouter;
