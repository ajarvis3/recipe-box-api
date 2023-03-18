import IOAuthUser from "../../../models/types/oauth.js";
import OAuthUser from "../../../models/oauth.js";

class OAuthUserData {
   createUser = (email: string, name: string, id: string) => {
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
      return user.save();
   };

   createAndSaveUser = (
      email: string,
      name: string,
      id: string
   ): Promise<IOAuthUser> => {
      return this.saveUser(this.createUser(email, name, id));
   };

   findUserByEmail = (email: string) => {
      return OAuthUser.findOne({ email });
   };

   findUserByUuid = (id: string) => {
      return OAuthUser.findOne({ _id: id });
   };
}

export default new OAuthUserData();
