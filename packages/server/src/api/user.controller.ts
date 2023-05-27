import mongoose from "mongoose";
import { Request, Response } from "express";
import { JwtToken, JwtRequest } from "./@types.d";
import { IUser } from "@snoutbook/shared";
import bcrypt from "bcrypt";

import { findUserById, findAllUsers } from "./user.model";

export const UserController = {
  findAll: async (req: Request, res: Response): Promise<any> => {
    try {
      const users = await findAllUsers({});
      if (!users) {
        return res.status(404).send({
          success: false,
          message: "Users not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: users,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err!.toString(),
        data: null,
      });
    }
  },

  findOne: async (req: Request, res: Response): Promise<any> => {
    try {
      const user = await findUserById(req.params.id);
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err!.toString(),
        data: null,
      });
    }
  },

  findMe: async (req: JwtRequest, res: Response): Promise<any> => {
    try {
      const user = await findUserById(req.user as string, { password: 0 });
      if (!user) {
        return res.status(400).send({
          success: false,
          message: "User not found",
          data: null,
        });
      }

      res.status(200).send({
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err!.toString(),
        data: null,
      });
    }
  },
};
