import IUser from "../../../models/types/user.js";
import User from "../../../models/user.js";
import { v4 as uuidv4 } from "uuid";
import { getSalt } from "../../auth/index.js";
import { hashPassword } from "../../auth/index.js";

class UserData {
   createUser = (
      email: string,
      password: string,
      firstName: string,
      lastName: string
   ) => {
      const _id = uuidv4();
      const timeCreated = Date.now();
      const salt = getSalt();
      const hash = hashPassword(password, salt);

      return new User({
         _id,
         firstName,
         lastName,
         email,
         passwordHash: hash,
         salt,
         timeCreated,
      });
   };

   saveUser = (user: IUser) => {
      return user.save();
   };

   createAndSaveUser = (
      email: string,
      password: string,
      firstName: string,
      lastName: string
   ): Promise<IUser> => {
      return this.saveUser(
         this.createUser(email, password, firstName, lastName)
      );
   };

   findUserByEmail = (email: string) => {
      return User.findOne({ email });
   };

   findUserByUuid = (id: string) => {
      return User.findOne({ _id: id });
   };
}

export default new UserData();
