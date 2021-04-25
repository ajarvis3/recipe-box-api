import * as express from "express";
import startDb from "../../utils/db/connect";
import User from "../../models/user";
import getToken from "../../utils/auth/tokengenerator";
import checkToken from "../../utils/auth/tokenchecker";
import jwt from "jsonwebtoken";
import IAuthRequest from "../../utils/auth/types/authrequest";

const router = express.Router();

/* POST signin data */
router.post("/", checkToken, (req: IAuthRequest, res, next) => {
   startDb();

   const failed = () => res.status(401).send();
   const tok = jwt.decode(req.token);
   console.log(tok);
   jwt.verify(req.token, process.env.secret, (err, authorizedData) => {
      if (err) {
         console.log("sad andrew");
         res.sendStatus(403);
      } else {
         // If token is successfully verified, we can send the autorized data
         res.json({
            message: "Successful log in",
            authorizedData,
         });
      }
   });
});

const verifyRouter = router;
export default verifyRouter;
