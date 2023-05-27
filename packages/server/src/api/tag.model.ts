import mongoose from "mongoose";
import { Response } from "express";
import { IPost, ITag, IAvatar } from "@snoutbook/shared";
import { JwtRequest } from "./@types.d";
import { errorCatchResponse } from "./helpers";
import uniqueSlug from "unique-slug";

export const TagSchema = new mongoose.Schema({
  name: String,
  slug: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export const Tag = mongoose.model<ITag & Document>("Tag", TagSchema);

TagSchema.pre("save", function (next) {
  // remove tags from post:
  this.$model("Post")
    .updateMany(
      { _id: { $nin: this.posts } },
      { $pull: { hashtags: this._id } }
    )
    .exec();
  // add tags to post:
  this.$model("Post")
    .updateMany(
      { _id: { $in: this.posts } },
      { $addToSet: { hashtags: this._id } }
    )
    .exec();
  next();
});

export const createTag = (tag: ITag) => {
  return Tag.create(tag).then((docTag) => {
    console.log("\n>> Created Tag:\n", docTag);
    return docTag;
  });
};
