import * as express from "express";
import * as path from "path";
import { getSalt, hashPassword } from "../../utils/auth";
import { v4 as uuidv4 } from "uuid";
import User from "../../models/user";
import startDb from "../../utils/db/connect";
import jwt from "jsonwebtoken";

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

   // Cosmos doesn't support unique :(
   User.findOne({ email: req.body.email }).then((use) => {
      if (use !== null) {
         res.status(401).send();
         return;
      }
   });

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
         res.status(401).send();
      } else {
         const token = jwt.sign({ id: user._id }, process.env.secret, {
            expiresIn: 86400, // expires in 24 hours
         });
         res.status(200).send({ auth: true, token });
      }
   });
});

const signupRouter = router;
export default signupRouter;
