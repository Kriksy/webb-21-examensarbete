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
            console.log("admin user created")
        })
        .catch(
            (error) => {
                console.log(error.message)
                console.log("admin user already created")
            }
        ).finally(() => process.exit(0));
});

