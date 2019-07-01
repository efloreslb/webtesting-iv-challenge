const server = require('./server');

const request = require('supertest');

const db = require('../data/dbConfig');

describe('server js', () => {
   it('should set the test env', () => {
     expect(process.env.DB_ENV).toBe('testing');
   })
})