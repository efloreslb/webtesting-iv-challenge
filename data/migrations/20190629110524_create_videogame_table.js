exports.up = function(knex) {
   return knex.schema.createTable('videogames', tbl => {
         tbl.increments();
         tbl.string('title').notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('videogames');
};
