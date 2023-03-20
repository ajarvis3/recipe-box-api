import mongoose from "mongoose";

interface IRecipe extends mongoose.Document {
   _id: string;
   source: string;
   author: string;
   title: string;
   description: string;
   imageUrl: string;
   url: string;
   tags: string[];
   comments: string[];
   userUuid: string;
   timeCreated: number;
   addTag: (tag: string) => void;
   __v: number;
}

export default IRecipe;
