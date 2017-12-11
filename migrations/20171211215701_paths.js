
exports.up = function (knex, Promise) {
  return knex.schema.createTable('paths', (table) => {
    table.increments('id').primary()
    table.integer('coords')
    table.string('places')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('paths')
}
