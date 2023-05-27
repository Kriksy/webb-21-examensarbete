import * as jwt from "jwt-then";
import { JwtToken, JwtRequest } from "./@types.d";
import { authConfig } from "../config/auth";
import { Request, Response, NextFunction } from "express";

export const verifyToken = async (
  req: JwtRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const authorization: string | undefined = req.headers["authorization"];
  if (!authorization) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }
  console.log("authorization:", authorization);

  const token: string | undefined = authorization.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .send({ auth: false, message: "Malformed token provided." });
  }

  try {
    // Verifies secret and checks token expiration time
    const decoded = (await jwt.verify(token, authConfig.secret)) as JwtToken;
    req.user = decoded.id;
    req.role = decoded.role

    next();
  } catch (err) {
    res.status(500).send({ auth: false, message: err });
  }
};

export const verifyAdminRole = async (
  req: JwtRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    if (req.role !== "admin") {
      return res.status(403).send({
        success: false,
        message: "User not allowed",
      });
    }
    next();
  } catch (error) {
    return errorCatchResponse(res, error);
  }
};

export const errorCatchResponse = (res: Response, error: any) => {
  res.status(500).send({
    success: false,
    message: error!.toString(),
  });
};
