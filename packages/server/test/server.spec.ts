import express from "express";
import { assert } from "chai";
import request from "supertest"; // https://www.npmjs.com/package/supertest

import { server as app } from "../src/server/server";

// describe("GET /users", function () {
//   it("responds with json", function (done) {
//     request(app)
//       .get("/users")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/) // regexp
//       .expect(200, done);
//   });
// });

// describe("POST /users", function () {
//   it("responds with json", function (done) {
//     request(app)
//       .post("/users")
//       .send({ username: "john4", password: "john4" })
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(201)
//       .end(function (err, res) {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });

// describe("POST /users2", function () {
//   it("responds with bad request", async () => {
//     await request(app)
//       .post("/users")
//       .send({ username: "john", password: "secret2" })
//       .expect(201);

//     request(app)
//       .post("/users")
//       .send({ username: "john", password: "secret3" })
//       .expect(4010)
//       .end(function (err, res) {
//         return;
//       });
//   });
// });
