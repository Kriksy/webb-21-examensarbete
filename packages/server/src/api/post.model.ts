import mongoose from "mongoose";
import { Response } from "express";
import { IPost, ICreatePost, ITag, IAnimal } from "@snoutbook/shared";
import { JwtRequest } from "./@types.d";
import { errorCatchResponse } from "./helpers";
import uniqueSlug from "unique-slug";
import { createAnimal } from "./animal.model";

const PostSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, unique: false, maxLength: 140 },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hashtags: [String],
    img: { type: String, required: true },
    approved: { type: Boolean, required: true, default: false },
    pendingApproval: { type: Boolean, required: true, default: true },
    // animal: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Animal",
    // },
    animal: {type: String},
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    favoritedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    virtuals: {
      likes: {
        get() {
          return this.likedBy.length;
        },
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const Post = mongoose.model<IPost & mongoose.Document>(
  "Post",
  PostSchema
);

PostSchema.pre("save", function (next) {
  // remove tags from post:
  this.$model("Tag")
    .updateMany(
      { _id: { $nin: this.hashtags } },
      { $pull: { hashtags: this._id } }
    )
    .exec();
  // add tags to post:
  this.$model("Tag")
    .updateMany(
      { _id: { $in: this.hashtags } },
      { $addToSet: { hashtags: this._id } }
    )
    .exec();
  next();
});

export const createPost = async (post: ICreatePost) => {
  await createAnimal(post.animal as string)
  return new Post(post).save().then((doc) => {
    console.log("\n>> Created Post:\n", doc);
    return doc;
  });
};

export const findAllPosts = (options: any = {}) => {
  return Post.find(options);
};

export const findAllPostsByHashTag = (hashtag: string) => {
  return Post.find(
    {
      hashtags: {
        $elemMatch: { $eq: "#" + hashtag },
      },
    },
    null,
    { sort: { createdAt: -1 } }
  )
    .populate("user")
    .exec();
};

export const findAllPostsPendingApproval = () => {
  return Post.find(
    {
      pendingApproval: true,
    },
    null,
    { sort: { createdAt: -1 } }
  )
    .populate("user")
    .exec();
};

export const updatePostById = async (postId: string, data: any) => {
  return await Post.findByIdAndUpdate(postId, data);
};
