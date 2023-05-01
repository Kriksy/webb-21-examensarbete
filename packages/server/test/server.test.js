import express from "express"
import chai from "chai"
import request from "supertest" // https://www.npmjs.com/package/supertest

import app from "../src/server.js"

describe('GET /user', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)   // regexp
            .expect(200, done);
    });
});

describe('POST /users', function () {
    it('responds with json', function (done) {
        request(app)
            .post('/user')
            .send({ name: 'john' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});