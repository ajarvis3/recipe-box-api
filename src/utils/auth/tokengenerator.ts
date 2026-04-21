import jwt from "jsonwebtoken";
import IUser from "../../models/types/user.js";
import MyError from "../../types/Error.js";
import getJwtSecret from "./secret.js";

const getToken = (user: IUser) => {
   const secret = getJwtSecret();

   if (!secret) {
      throw new MyError(500, "JWT secret is not configured");
   }

   const token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400, // expires in 24 hours
   });
   return token;
};

export default getToken;
