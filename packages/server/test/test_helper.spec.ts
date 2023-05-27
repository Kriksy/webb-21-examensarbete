import mongoose from "mongoose";

const mongoURL: string = process.env.MONGODB_URL || "mongodb://localhost:27017";

// Called hooks which runs before something
beforeEach(async () => {
  await mongoose.connect(mongoURL);
  mongoose.connection.on("error", (error) => {
    console.warn("Error : ", error);
  });

  for (var i in mongoose.connection.collections) {
    mongoose.connection.collections[i].drop();
  }
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
