exports.up = function (knex) {
    return knex.schema.createTable('trainers', function (table) {
        table.integer('id_trainer').primary();
        table.string('name').notNullable();
        table.string('login').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('trainers');
};
