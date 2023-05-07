import mongoose from "mongoose";
import { UserInterface } from "../interface/user";
import uniqueValidator from "mongoose-unique-validator";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(uniqueValidator, { message: "is already taken" });

export const UserModel = mongoose.model<UserInterface>("User", UserSchema);
