import { assert, expect } from "chai";
import { Error } from "mongoose";
import api from "../api";

const users: { username: string; password: string }[] = [
  {
    username: "hela",
    password: "notsosecret",
  },
  {
    username: "john",
    password: "supersecret",
  },
];

// describe("snoutbook tests (user.spec.ts)", function () {
//   it("create new user", async () => {
//     const result = await api.createUser(users[0]);
//     expect(result.message).to.equal("Successful");
//   });
//   it("create another user using the same username should fail", async () => {
//     try {
//       const result = await api.createUser(users[0]);
//     } catch (error) {
//       expect(error).to.exist;
//     }
//   });
//   it("(login) authenticate user and get a token", async () => {
//     await api.createUser(users[1]);
//     const authResponse = await api.auth(users[1]);
//     expect(authResponse.token).to.exist;
//   });
//   it("(login) authenticate user and get a token", async () => {
//     await api.createUser(users[1]);
//     const authResponse = await api.auth(users[1]);
//     expect(authResponse.token).to.exist;
//   });
//   it("add a friend", async () => {});
// });
