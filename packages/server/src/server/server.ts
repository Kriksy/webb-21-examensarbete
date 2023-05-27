import express, {
  Express,
  Request,
  Response,
  NextFunction,
  Router,
  json,
} from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import { router } from "./routes";
dotenv.config();

// Server Setup
export const server: Express = express();

// Default error response
const jsonErrorHandler = (err: any, req: Request, res: Response, next: any) => {
  res.status(500).send({ error: err });
};

// Server Middleware/Helpers
server.use(morgan("combined"));

server.use(json());
server.use(cors());
server.use(jsonErrorHandler);
server.use("/api", router);
