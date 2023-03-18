import mongoose from "mongoose";

interface IOAuthUser extends mongoose.Document {
   _id: string;
   name: string;
   email: string;
   timeCreated: number;
   verifyUser: (token: string) => boolean;
   __v: number;
}

export default IOAuthUser;
