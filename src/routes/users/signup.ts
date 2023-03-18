import * as express from "express";
import getToken from "../../utils/auth/tokengenerator.js";
import UserData from "../../utils/db/User/UserData.js";
import IUser from "../../models/types/user.js";
import MyError from "../../types/Error.js";

const router = express.Router();

/* POST signup data */
router.post("/", (req, res, next) => {
   const body = req.body;

   const failed = () => {
      const err = new MyError(401, "Unauthorized");
      next(err);
   };

   if (!body.password || !body.firstName || !body.lastName || !body.email) {
      failed();
      return;
   }

   UserData.createAndSaveUser(
      req.body.email,
      req.body.password,
      req.body.firstName,
      req.body.lastName
   ).then((user: IUser) => {
      if (user) {
         const token = getToken(user);
         res.status(200).send({ auth: true, id: user._id, token });
      } else {
         failed();
      }
   });
});

const signupRouter = router;
export default signupRouter;
