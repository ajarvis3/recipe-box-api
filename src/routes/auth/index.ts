import signinRouter from "./signin.js";
import verifyRouter from "./verify.js";
import oauthRouter from "./oauth.js";
import * as express from "express";

const router = express.Router();

router.use("/signin", signinRouter);
router.use("/verify", verifyRouter);
router.use("/oauth", oauthRouter);

const authRouter = router;
export default authRouter;
