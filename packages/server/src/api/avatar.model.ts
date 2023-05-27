import mongoose from "mongoose";
import { Response } from "express";
import { IAvatar } from "@snoutbook/shared";
import { JwtRequest } from "./@types.d";
import { errorCatchResponse } from "./helpers";
import uniqueSlug from "unique-slug";

export const AvatarSchema = new mongoose.Schema({
  name: String,
  slug: String,
  imgUrl: String,
});

export const Avatar = mongoose.model<IAvatar & mongoose.Document>(
  "Avatar",
  AvatarSchema
);
