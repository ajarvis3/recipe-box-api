import * as express from "express";
import getToken from "../../utils/auth/tokengenerator.js";
import checkToken from "../../utils/auth/tokenchecker.js";
import jwt from "jsonwebtoken";
import IAuthRequest from "../../utils/auth/types/authrequest.js";
import IUser from "../../models/types/user.js";
import UserData from "../../utils/db/User/UserData.js";
import MyError from "../../types/Error.js";
import ApplicationToken from "../../utils/auth/types/ApplicationToken.js";
import OAuthUserData from "../../utils/db/User/OAuthUserData.js";
import IOAuthUser from "../../models/types/oauth.js";
import getJwtSecret from "../../utils/auth/secret.js";

const router = express.Router();

/* POST verify data */
router.post("/", checkToken, async (req: IAuthRequest, res, next) => {
   try {
      if (!req.token) {
         throw new MyError(401, "Unauthorized");
      }

      const decodedToken = jwt.decode(req.token);

      if (!decodedToken || typeof decodedToken === "string") {
         throw new MyError(401, "Unauthorized");
      }

      const applicationToken = decodedToken as ApplicationToken;

      if ("aud" in applicationToken) {
         const user = await OAuthUserData.findUserByUuid(applicationToken.sub);

         if (!user) {
            throw new MyError(404, "OAuth user not found");
         }

         const loginTicket = await user.verifyUser(req.token);

         if (!loginTicket) {
            throw new MyError(401, "Unauthorized");
         }

         res.status(200).send({
            auth: true,
            id: applicationToken.sub,
            token: req.token,
         });
         return;
      }

      const secret = getJwtSecret();

      if (!secret) {
         throw new MyError(500, "JWT secret is not configured");
      }

      try {
         jwt.verify(req.token, secret);
      } catch {
         throw new MyError(401, "Unauthorized");
      }

      const user = await UserData.findUserByUuid(applicationToken.id);

      if (!user) {
         throw new MyError(404, "User not found");
      }

      const token = getToken(user);
      res.status(200).send({
         auth: true,
         id: applicationToken.id,
         token,
      });
   } catch (error) {
      next(error);
   }
});

const verifyRouter = router;
export default verifyRouter;
