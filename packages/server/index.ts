import { server } from "./src/server";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 9000;

// Setup Database
const mongoURL: string =
  process.env.MONGODB_URL || "mongodb://localhost:27017/snoutbook";

mongoose.connect(mongoURL).then(function (v) {
  if (mongoose.connection.readyState === 1) {
    console.log(`"[database]: connected to ${mongoURL}"`);
  } else {
    console.log("[database]: database connection error");
  }
});

// Server Start
server.listen(port, () => {
  console.log(`[server]: http server is running at https://localhost:${port}`);
});
