import IOAuthUser from "../../../models/types/oauth.js";
import OAuthUser from "../../../models/oauth.js";
import IOAuthUserToken from "../../../utils/auth/types/OAuthData.js";

class OAuthUserData {
   createUser = (email: string, name: string, id: string) => {
      console.log("createUser");
      const _id = id;
      const timeCreated = Date.now();

      return new OAuthUser({
         _id,
         name,
         email,
         timeCreated,
      });
   };

   saveUser = (user: IOAuthUser) => {
      console.log("saveUser");
      return user.save();
   };

   createAndSaveUser = (
      email: string,
      name: string,
      id: string
   ): Promise<IOAuthUser> => {
      return this.saveUser(this.createUser(email, name, id));
   };

   findOrCreateUser = (decodedToken: IOAuthUserToken) => {
      const email = decodedToken.email;
      const name = decodedToken.name;
      const id = decodedToken.sub;
      return this.findUserByEmail(email).then((user: IOAuthUser) => {
         if (user) {
            return this.findUserByEmail(email);
         } else {
            return this.createAndSaveUser(email, name, id);
         }
      });
   };

   findUserByEmail = (email: string) => {
      return OAuthUser.findOne({ email }).exec();
   };

   findUserByUuid = (id: string) => {
      return OAuthUser.findOne({ _id: id }).exec();
   };
}

export default new OAuthUserData();
