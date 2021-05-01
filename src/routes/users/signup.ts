import * as express from "express";
import getToken from "../../utils/auth/tokengenerator";
import UserData from "../../utils/db/User/UserData";
import IUser from "../../models/types/user";

const router = express.Router();

/* POST signup data */
router.post("/", (req, res, next) => {
   const body = req.body;
   if (!body.password) {
      res.status(401).send();
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
         res.status(200).send({ auth: true, token });
      }
   });
});

const signupRouter = router;
export default signupRouter;
