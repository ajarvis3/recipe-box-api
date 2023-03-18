import * as express from "express";
import UserData from "../../utils/db/User/UserData.js";
import getToken from "../../utils/auth/tokengenerator.js";
import MyError from "../../types/Error.js";
import IUser from "../../models/types/user.js";

const router = express.Router();

/* POST signin data */
router.post("/", (req, res, next) => {
   const failed = () => {
      const err = new MyError(401, "Unauthorized");
      next(err);
   };

   if (!req.body.password || !req.body.email) {
      failed();
   }

   UserData.findUserByEmail(req.body.email).then((user: IUser) => {
      if (user && user.verifyUser(req.body.password)) {
         const token = getToken(user);
         res.status(200).send({ auth: true, id: user._id, token });
      } else {
         failed();
      }
   }, failed);
});

const signinRouter = router;
export default signinRouter;
