import express, { Express, Request, Response, Router, json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { usersController } from "./controllers/users";

dotenv.config();

// Server Setup
export const server: Express = express();

// Server Middleware/Helpers
server.use(json());
server.use(cors());

server.use("/users", usersController);
