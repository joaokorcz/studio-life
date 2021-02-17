exports.up = function (knex) {
    return knex.schema.createTable('finances', function (table) {
        table.integer('id_finance').primary();
        table.integer('id_operator').notNullable();
        table.dateTime('operation_date').notNullable();
        table.float('value').notNullable();
        table.enu('type', ['payment', 'now', 'future']).notNullable();
        table.integer('id_member');
        table.dateTime('future_date');
        table.string('description');

        table.foreign('id_operator').references('id_trainer').inTable('trainers');
        table.foreign('id_member').references('id_member').inTable('members');
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('finances');
};
