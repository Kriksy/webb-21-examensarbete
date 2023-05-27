import mongoose from "mongoose";

export interface IImage {
  name: string;
  desc: string;
  path: string;
  img: {
    data: mongoose.Types.Buffer;
    contentType: string;
  };
}

const imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  path: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

export const ImageModel = mongoose.model<IImage>("Image", imageSchema);
