import * as express from "express";
import getToken from "../../utils/auth/tokengenerator";
import checkToken from "../../utils/auth/tokenchecker";
import jwt from "jsonwebtoken";
import IAuthRequest from "../../utils/auth/types/authrequest";
import IUser from "../../models/types/user";
import IUserToken from "../../utils/auth/types/usertoken";
import UserData from "../../utils/db/User/UserData";
import MyError from "../../types/Error";

const router = express.Router();

/* POST verify data */
router.post("/", checkToken, (req: IAuthRequest, res, next) => {
   const failed = () => {
      const err = new MyError(401, "Unauthorized");
      next(err);
   };

   if (!req.token) failed();

   const decodedToken = jwt.decode(req.token) as IUserToken;
   jwt.verify(req.token, process.env.secret, (err) => {
      if (err) {
         failed();
      } else {
         UserData.findUserByUuid(decodedToken.id).then((user: IUser) => {
            const token = getToken(user);
            res.status(200).send({ auth: true, id: decodedToken.id, token });
         });
      }
   });
});

const verifyRouter = router;
export default verifyRouter;
