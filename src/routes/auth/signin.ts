import * as express from "express";
import UserData from "../../utils/db/User/UserData";
import getToken from "../../utils/auth/tokengenerator";

const router = express.Router();

/* POST signin data */
router.post("/", (req, res, next) => {
   if (!req.body.password || !req.body.email) {
      res.status(400).send();
   }

   const failed = () => res.status(401).send();
   UserData.findUserByEmail(req.body.email).then((user) => {
      if (user.verifyUser(req.body.password)) {
         const token = getToken(user);
         res.status(200).send({ auth: true, token });
      } else {
         failed();
      }
   }, failed);
});

const signinRouter = router;
export default signinRouter;
