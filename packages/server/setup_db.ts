import { createUser } from "./src/api/user.model";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.SERVER_PORT || 9000;

// Setup Database
const mongoURL: string =
  process.env.MONGODB_URL || "mongodb://localhost:27017/snoutbook";

mongoose.connect(mongoURL).then(function (v) {
  if (mongoose.connection.readyState === 1) {
    console.log(`[database]: connected to ${mongoURL}`);
  } else {
    console.log("[database]: database connection error");
    return;
  }

  createUser({ username: "admin", password: "admin", role: "admin" })
    .then(() => {
      console.log("[setup_db.ts]: admin user created");
    })
    .catch((error) => {
      if (
        error.message === "User validation failed: username: is already taken"
      ) {
        console.log("[setup_db.ts]: admin user already exists");
      } else {
        console.log("[setup_db.ts]: " + error.message);
      }
    })
    .finally(() => process.exit(0));
});
