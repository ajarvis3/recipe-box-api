import jwt from "jsonwebtoken";
import IUser from "../../models/types/user";

const getToken = (user: IUser) => {
   const token = jwt.sign({ id: user.uuid }, process.env.secret, {
      expiresIn: 86400, // expires in 24 hours
   });
   return token;
};

export default getToken;
