const db = require('./data/dbConfig');

module.exports = {
   get,
   insert,
   remove
}

function get() {
   return db('videogames');
}

async function insert(videogame) {
   return db('videogames').insert(videogame);
}

function remove(id) {
   return db('videogames')
      .where({ id })
      .del()
}