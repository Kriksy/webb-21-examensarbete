import express from "express"
import dotenv from "dotenv"

const server = express()

server.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

server.post('/user', function (req, res) {
    res.status(201).json({ message: 'Success' });
});

export default server
