const express = require('express');

const Videogame = require('../videogameModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
   res.status(200).json({ api: 'up' })
})

server.get('/videogames', async (req, res) => {
   const videogames = await Videogame.get();
   res.status(200).json(videogames);
})

server.post('/videogames', async (req, res) => {
   const videogame = await Videogame.insert(req.body);
   res.status(201).json(videogame);
})

server.delete('/videogames/:id', async (req, res) => {
   const videogame = await Videogame.remove(req.params.id);
   res.status(200).json(videogame);
})

module.exports = server;