import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jwt-then";
import { authConfig } from "../config/auth";
import { findUserByUsername, createUser } from "./user.model";
import { JwtToken } from "./@types.d";

export const AuthController = {
  authenticate: async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body;
    try {
      const user = await findUserByUsername(username);
      if (!user) {
        return res.status(400).send({
          success: false,
          message: "User not found",
        });
      }

      const matchPasswords = await bcrypt.compare(
        password,
        user.password as string
      );
      if (!matchPasswords) {
        return res.status(401).send({
          success: false,
          message: "Not authorized",
        });
      }

      const token = await jwt.sign(
        {
          id: user._id.toString(),
          username,
          role: user.role,
        } as JwtToken,
        authConfig.secret,
        {
          expiresIn: authConfig.tokenLife,
        }
      );

      res.status(200).send({
        success: true,
        message: "Token generated Successfully",
        data: { token },
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err!.toString(),
      });
    }
  },

  register: async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body;
    try {
      const user = await createUser({
        username,
        password,
        role: "standard",
      });
      res.status(201).send({
        success: true,
        message: "User Successfully created",
        data: user,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err!.toString(),
      });
    }
  },
};
