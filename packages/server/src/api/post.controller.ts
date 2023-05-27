import mongoose from "mongoose";
import { Response } from "express";
import { IPost, ITag, IAvatar } from "@snoutbook/shared";
import { JwtRequest } from "./@types.d";
import { errorCatchResponse } from "./helpers";
import {
  Post,
  createPost,
  findAllPosts,
  updatePostById,
  findAllPostsPendingApproval,
} from "./post.model";
import uniqueSlug from "unique-slug";

const hashtagRegex = /#[\_\wåäöÅÄÖ]+/g;

export const PostController = {
  createPost: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const { text, animal } = req.body;
      const file = req.file as Express.Multer.File;
      const userPost = await createPost({
        text: text as string,
        animal: animal,
        user: req.user,
        hashtags: text.match(hashtagRegex),
        img: file.path,
      });
      return res.json({
        success: true,
        data: userPost,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  findAllPosts: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const query: {
        hashtags?: any;
        animal?: any
      } = {};
      if ("hashtag" in req.params) {
        query["hashtags"] = {
          $elemMatch: { $eq: "#" + req.params.hashtag },
        };
      }

      if ("animal" in req.params) {
        query["animal"] = {
          animal: req.params.animal,
        };
      }

      const posts = await Post.find(req.query, null, { sort: { createdAt: -1 } })
        .populate("user", "username avatar")
        .exec();

      return res.json({
        success: true,
        data: posts,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  findAllPostsPendingApproval: async (
    req: JwtRequest,
    res: Response
  ): Promise<any> => {
    try {
      const posts = await findAllPostsPendingApproval();
      res.json({
        success: true,
        data: posts,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  updatePost: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const postId = req.params.postId;
      const post = await updatePostById(postId, req.body);
      res.json({
        success: true,
        data: post,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  likePost: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const postId = req.params.postId;

      const update = {
        $addToSet: { likedBy: { _id: req.user } }
      }
      const post = await Post.findOneAndUpdate({
        _id: postId,
        likedBy: { $ne: req.user }
      }, update)
      res.json({
        success: true,
        data: post,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  dislikePost: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const post = await Post.updateOne({ _id: req.params.postId }, {
        $pullAll: {
          likedBy: [{ _id: req.user }],
        },
      });
      res.json({
        success: true,
        data: post,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  adminApprovePost: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const postId = req.params.postId;
      const post = await Post.findByIdAndUpdate(postId, {
        approved: true,
        pendingApproval: false,
      });
      res.json({
        success: true,
        message: "Successfully updated post as approved",
        data: post,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },

  adminDenyApprovalPost: async (
    req: JwtRequest,
    res: Response
  ): Promise<any> => {
    try {
      const postId = req.params.postId;
      const post = await Post.findByIdAndUpdate(postId, {
        approved: false,
        pendingApproval: false,
      });
      res.json({
        success: true,
        message: "Successfully updated post as denied",
        data: post,
      });
    } catch (error) {
      errorCatchResponse(res, error);
    }
  },
};
