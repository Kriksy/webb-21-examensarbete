
import mongoose from "mongoose";
import { IAnimal } from "@snoutbook/shared";
import { Document } from "mongoose";

import uniqueSlug from "unique-slug";

export const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    slug: String,
},
{
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

export const Animal = mongoose.model<IAnimal & Document>(
    "Animal",
    AnimalSchema
);



// https://stackoverflow.com/questions/33305623/mongoose-create-document-if-not-exists-otherwise-update-return-document-in
export const createAnimal = async (animalName: string) => {
    
    return await Animal.findOneAndUpdate({
        name: animalName
    }, { expire: new Date() },  { upsert: true, new: true, setDefaultsOnInsert: true })
};