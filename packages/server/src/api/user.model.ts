import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import { Request, Response } from "express";
import { JwtToken, JwtRequest } from "../api/@types.d";
import { IUser } from "@snoutbook/shared";

import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      default: "standard",
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
      default: "1",
      trim: true,
    },
  },
  {
    timestamps: true,
    useNestedStrict: true,
  }
);

UserSchema.plugin(uniqueValidator, { message: "is already taken" });

export const User = mongoose.model<IUser & mongoose.Document>(
  "User",
  UserSchema
);
export default User;

export const createUser = async (u: IUser): Promise<any> => {
  const hash = await bcrypt.hash(u.password as string, 10);
  const user = new User({
    username: u.username,
    password: hash,
    role: u.role,
  });

  return await user.save();
};

export const findUserById = async (
  userId: string,
  options: any = {}
): Promise<any> => {
  return User.findById(userId, options);
};

export const findUserByUsername = async (username: string): Promise<any> => {
  return User.findOne({ username: username });
};

export const findAllUsers = async (options: any = {}): Promise<any> => {
  return User.find({});
};
