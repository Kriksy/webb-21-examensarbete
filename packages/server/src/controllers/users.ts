import express, { Express, Request, Response, Router, json } from "express";
import { UserInterface } from "../interface/user";
import { UserModel } from "../models/user";

export const usersController: Router = express.Router();

// Get User
usersController.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ name: "john" });
});

// Create User
usersController.post("/", async (req: Request, res: Response) => {
  const username: string = req.body.username;
  const password: string = req.body.password;
  const data = { username, password } as UserInterface;
  const u = new UserModel(data);
  u.save()
    .then((user) => {
      res.status(201).send({ message: "Successful" });
    })
    .catch((error) => {
      res.status(200).json({ error: error });
    });
});
