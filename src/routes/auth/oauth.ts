import * as express from "express";
import OAuthUserData from "../../utils/db/User/OAuthUserData";
import MyError from "../../types/Error";
import jwt from "jsonwebtoken";
import IOAuthUserToken from "../../utils/auth/types/OAuthData";
import IOAuthUser from "../../models/types/oauth";
import mongoose from "mongoose";

const router = express.Router();

/* POST signin data */
router.post("/", async (req, res, next) => {
   try {
      const { credential, clientId } = req.body ?? {};

      if (typeof credential !== "string" || typeof clientId !== "string") {
         throw new MyError(400, "Missing OAuth credentials");
      }

      const decoded = jwt.decode(credential);

      if (!decoded || typeof decoded === "string") {
         throw new MyError(401, "Unauthorized");
      }

      const user: IOAuthUser = await OAuthUserData.findOrCreateUser(
         decoded as IOAuthUserToken,
      );

      let loginTicket: unknown = null;

      try {
         loginTicket = await user.verifyUser(credential);
      } catch {
         throw new MyError(401, "Unauthorized");
      }

      if (!loginTicket) {
         throw new MyError(401, "Unauthorized");
      }

      res.status(200).send({
         auth: true,
         id: user._id,
         token: credential,
      });
   } catch (error) {
      if (error instanceof mongoose.Error && error.name === "ValidationError") {
         next(new MyError(400, "Invalid OAuth data", error.message));
         return;
      }

      // if (
      //    typeof error === "object" &&
      //    error !== null &&
      //    "code" in error &&
      //    (error as { code?: number }).code === 11000
      // ) {
      //    next(new MyError(409, "Email already exists"));
      //    return;
      // }

      next(error);
   }
});

const oauthRouter = router;
export default oauthRouter;
