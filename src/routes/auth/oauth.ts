import * as express from "express";
import OAuthUserData from "../../utils/db/User/OAuthUserData";
import getToken from "../../utils/auth/tokengenerator";
import MyError from "../../types/Error";
import jwt from "jsonwebtoken";
import IOAuthUserToken from "../../utils/auth/types/OAuthData";

const router = express.Router();

/* POST signin data */
router.post("/", (req, res, next) => {
   const failed = () => {
      const err = new MyError(401, "Unauthorized");
      next(err);
   };

   console.log(req);
   console.log(req.body);
   //    if (!req.body.credential || !req.body.clientid) {
   //       failed();
   //    }
   const decoded: IOAuthUserToken = jwt.decode(
      req.body.credential
   ) as IOAuthUserToken;
   console.log(decoded);

   OAuthUserData.findUserByEmail(decoded.email).then((user) => {
      //   if (user && user.verifyUser(req.body.password)) {
      //      res.status(200).send({ auth: true, id: user._id, token });
      //   } else {
      //      failed();
      //   }
   }, failed);
});

const oauthRouter = router;
export default oauthRouter;
