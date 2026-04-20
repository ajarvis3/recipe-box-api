import * as express from "express";
import getToken from "../../utils/auth/tokengenerator";
import UserData from "../../utils/db/User/UserData";
import IUser from "../../models/types/user";
import MyError from "../../types/Error";
import mongoose from "mongoose";

const router = express.Router();

/* POST signup data */
router.post("/", async (req, res, next) => {
   try {
      const { password, firstName, lastName, email } = req.body ?? {};

      if (
         typeof password !== "string" ||
         typeof firstName !== "string" ||
         typeof lastName !== "string" ||
         typeof email !== "string" ||
         !password.trim() ||
         !firstName.trim() ||
         !lastName.trim() ||
         !email.trim()
      ) {
         throw new MyError(400, "Missing required signup fields");
      }

      const existingUser = await UserData.findUserByEmail(email);

      if (existingUser) {
         throw new MyError(409, "Email already exists");
      }

      const user: IUser = await UserData.createAndSaveUser(
         email,
         password,
         firstName,
         lastName,
      );
      const token = getToken(user);

      res.status(201).send({ auth: true, id: user._id, token });
   } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
         next(new MyError(400, "Invalid signup data", error.message));
         return;
      }

      if (
         typeof error === "object" &&
         error !== null &&
         "code" in error &&
         (error as { code?: number }).code === 11000
      ) {
         next(new MyError(409, "Email already exists"));
         return;
      }

      next(error);
   }
});

const signupRouter = router;
export default signupRouter;
