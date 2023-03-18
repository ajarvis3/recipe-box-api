import mongoose from "mongoose";

interface IRecipe extends mongoose.Document {
   _id: string;
   source: string;
   author: string;
   title: string;
   description: string;
   imageUrl: string;
   url: string;
   timeCreated: number;
   tags: string[];
   comments: string[];
   userUuid: string;
   addTag: (tag: string) => void;
   __v: number;
}

export default IRecipe;
