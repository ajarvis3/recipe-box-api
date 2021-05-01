import mongoose, { Query } from "mongoose";

interface IUser extends mongoose.Document {
   uuid: string;
   firstName: string;
   lastName: string;
   email: string;
   passwordHash: string;
   salt: string;
   timeCreated: number;
   setPassword: (password: string) => void;
   verifyUser: (password: string) => boolean;
}

export default IUser;
