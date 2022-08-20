// build your server here and require it from index.js
const express = require('express');
const tasksRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/tasks', tasksRouter);

module.exports = server;