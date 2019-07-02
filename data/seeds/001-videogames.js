exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videogames').del()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        { title: 'Final Fantasy' },
        { title: 'Legend of Zelda' },
        { title: 'Saga Frontier' },
        { title: 'Smash Brothers' }
      ]);
    });
};
