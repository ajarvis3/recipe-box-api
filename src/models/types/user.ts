import mongoose from "mongoose";

interface IUser extends mongoose.Document {
   uuid: string;
   firstName: string;
   lastName: string;
   email: string;
   passwordHash: string;
   salt: string;
   timeCreated: number;
   setPassword: (pw: string) => void;
   verifyUser: (pw: string) => boolean;
}

export default IUser;
