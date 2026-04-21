import * as express from "express";
import UserData from "../../utils/db/User/UserData.js";
import getToken from "../../utils/auth/tokengenerator.js";
import MyError from "../../types/Error.js";
import mongoose from "mongoose";

const router = express.Router();

/* POST signin data */
router.post("/", async (req, res, next) => {
   try {
      const { email, password } = req.body ?? {};

      if (typeof email !== "string" || typeof password !== "string") {
         throw new MyError(400, "Missing email or password");
      }

      const user = await UserData.findUserByEmail(email);

      if (!user || !user.verifyUser(password)) {
         throw new MyError(401, "Unauthorized");
      }

      const token = getToken(user);
      res.status(200).send({ auth: true, id: user._id, token });
   } catch (error) {
      if (error instanceof mongoose.Error) {
         next(new MyError(500, "Unable to sign in", error.message));
         return;
      }

      next(error);
   }
});

const signinRouter = router;
export default signinRouter;
