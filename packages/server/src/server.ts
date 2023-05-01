import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";

dotenv.config();

// Server Setup
export const server: Express = express();

server.get("/user", function (req: Request, res: Response) {
  res.status(200).json({ name: "john" });
});

server.post("/user", function (req: Request, res: Response) {
  res.status(201).json({ message: "Success" });
});
