const server = require('./server.js');
const request = require('supertest');
const db = require('../data/dbConfig');
const Videogames = require('../videogameModel')

describe('server js', () => {
   it('should set the test env', () => {
     expect(process.env.DB_ENV).toBe('testing');
   })

   describe('get/', () => {
      it('should return 200, JSON, and api: up', async () => {
         const res = await request(server).get('/');
         expect(res.status).toBe(200);
         expect(res.type).toBe('application/json');
         expect(res.body).toEqual({ api: 'up' })
      })
   })

   describe('GET /videogames/', () => {
      afterEach(async () => {
         await db('videogames').truncate();
      });

      it('should return test data', async () => {
         // const testdata = [
         //    {"id": 1, "title": "Final Fantasy"}, 
         //    {"id": 2, "title": "Legend of Zelda"}, {"id": 3, "title": "Saga Frontier"}, 
         //    {"id": 4, "title": "Smash Brothers"}
         // ]

         const res = await request(server).get('/videogames');
         expect(res.status).toBe(200);
         expect(res.body).toEqual([])
      })
   })

   describe('POST /videogames/', () => {
      afterEach(async () => {
         await db('videogames').truncate();
      });

      it('should insert videogame', async () => {
         await Videogames.insert({ title: 'Saga Frontier' })
         await Videogames.insert({ title: 'Final Fantasy' })

         const videogames = await db('videogames');

         expect(videogames).toHaveLength(2);
         expect(videogames[0].title).toBe('Saga Frontier');
      })

      it('should return 201 status', async () => {
         const res = await request(server)
            .post('/videogames')
            .send({ title: 'Super Smash' });
         expect(res.status).toBe(201);
      })
     
   })

   describe('DELETE /videogames/', () => {
      afterEach(async () => {
         await db('videogames').truncate();
      });

      it('should delete videogame by id', async () => {
         await Videogames.insert({ title: 'Legend of Zelda' })
         await Videogames.insert({ title: 'Mario Kart' })
         await Videogames.remove(1);

         const videogames = await db('videogames');

         expect(videogames).toHaveLength(1);
      })

      it('should return 200 status', async () => {
         const res = await request(server)
            .delete("/videogames/1");

         expect(res.status).toBe(200);
      })
   });
})