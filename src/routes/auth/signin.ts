import * as express from "express";
import startDb from "../../utils/db/connect";
import User from "../../models/user";
import getToken from "../../utils/auth/tokengenerator";

const router = express.Router();

/* POST signin data */
router.post("/", (req, res, next) => {
   if (!req.body.password || !req.body.email) {
      res.status(400).send();
   }
   startDb();

   const failed = () => res.status(401).send();
   User.findOne({ email: req.body.email }).then((user) => {
      if (user.verifyUser(req.body.password)) {
         const token = getToken(user);
         res.status(200).send({ auth: true, token });
      } else {
         failed();
      }
   }, failed);
});

const signInRouter = router;
export default signInRouter;
