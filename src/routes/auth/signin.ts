import * as express from "express";
import UserData from "../../utils/db/User/UserData";
import getToken from "../../utils/auth/tokengenerator";
import MyError from "../../types/Error";

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

   UserData.findUserByEmail(req.body.email).then((user) => {
      if (user.verifyUser(req.body.password)) {
         const token = getToken(user);
         res.status(200).send({ auth: true, id: user._id, token });
      } else {
         failed();
      }
   }, failed);
});

const signinRouter = router;
export default signinRouter;
