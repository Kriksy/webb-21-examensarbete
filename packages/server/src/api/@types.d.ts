import { Request, Response } from "express";
import { IPost } from "@snoutbook/shared";

export interface JwtToken {
  id: string;
  username: string;
  role: string
}

export interface ICustomRequest {}

export interface JwtResponse<T> extends Response<T> {
  token: string;
  refreshToken: string;
  user: string;
}

export interface JwtRequest extends Request {
  user?: string;
  role?: string;
  jwt?: JwtPayload;
  refreshToken?: JwtPayload;
}
