import { server } from "./src/server/server";
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

  createUser({ username: "admin", password: "admin", role: "admin" }).catch(
    (error) => {
      // ignore
    }
  );
});

// Adds id to database schemas
mongoose.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Server Start
server.listen(port, () => {
  console.log(`[server]: http server is running at http://localhost:${port}`);
});
