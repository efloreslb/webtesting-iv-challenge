const express = require('express');

const Videogame = require('../videogameModel.js');

const server = express();

server.use(express.json());

server.get('/videogames', (req, res) => {
   res.status(200).json({api: 'up'})
})