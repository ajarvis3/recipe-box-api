import * as express from "express";
import * as path from "path";
import { getSalt, hashPassword } from "../../utils/auth";
import { v4 as uuidv4 } from "uuid";
import User from "../../models/user";
import startDb from "../../utils/db/connect";

const router = express.Router();

/* POST signup data */
router.post("/", (req, res, next) => {
   const body = req.body;
   if (!body.password) {
      res.status(401).send();
      return;
   }
   const uuid = uuidv4();
   const timeCreated = Date.now();
   const salt = getSalt();
   const hash = hashPassword(req.body.password, salt);

   startDb();

   const user = new User({
      uuid,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      passwordHash: hash,
      salt,
      timeCreated,
   });
   user.save((err, saveUser) => {
      if (err) {
         res.status(401).send(process.env.DB_HOST + " " + process.env.NODE_ENV);
      } else {
         res.status(200).send();
      }
   });
});

const signupRouter = router;
export default signupRouter;
