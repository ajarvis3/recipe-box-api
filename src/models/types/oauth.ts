import { LoginTicket } from "google-auth-library";
import mongoose from "mongoose";
import IOAuthUserToken from "../../utils/auth/types/OAuthData";

interface IOAuthUser extends mongoose.Document {
   _id: string;
   name: string;
   email: string;
   timeCreated: number;
   verifyUser: (token: IOAuthUserToken) => Promise<LoginTicket>;
   __v: number;
}

export default IOAuthUser;
