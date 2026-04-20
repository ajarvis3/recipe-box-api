import * as express from "express";
import OAuthUserData from "../../utils/db/User/OAuthUserData";
import getToken from "../../utils/auth/tokengenerator";
import MyError from "../../types/Error";
import jwt from "jsonwebtoken";
import IOAuthUserToken from "../../utils/auth/types/OAuthData";
import IOAuthUser from "../../models/types/oauth";

const router = express.Router();

/* POST signin data */
router.post("/", (req, res, next) => {
   const failed = () => {
      const err = new MyError(401, "Unauthorized");
      next(err);
   };

   if (!req.body.credential || !req.body.clientId) {
      return failed();
   }
   const decoded = jwt.decode(req.body.credential);
   if (!decoded || typeof decoded === "string") {
      return failed();
   }

   OAuthUserData.findOrCreateUser(decoded as IOAuthUserToken).then(
      (user: IOAuthUser) => {
      if (user) {
         user
            .verifyUser(req.body.credential)
            .then((loginTicket) => {
               res.status(200).send({
                  auth: true,
                  id: user._id,
                  token: req.body.credential,
               });
            })
            .catch((e) => {
               failed();
            });
      } else {
         failed();
      }
      }
   );
});

const oauthRouter = router;
export default oauthRouter;
