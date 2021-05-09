import mongoose from "mongoose";

interface IUser extends mongoose.Document {
   _id: string;
   firstName: string;
   lastName: string;
   email: string;
   passwordHash: string;
   salt: string;
   timeCreated: number;
   setPassword: (password: string) => void;
   verifyUser: (password: string) => boolean;
   __v: number;
}

export default IUser;
