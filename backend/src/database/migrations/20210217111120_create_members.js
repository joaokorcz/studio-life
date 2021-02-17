exports.up = function (knex) {
    return knex.schema.createTable('members', function (table) {
        table.integer('id_member').primary();
        table.string('name').notNullable();
        table.string('cpf', 11).notNullable().unique();
        table.string('cellphone', 11).notNullable();
        table.string('address', 11).notNullable();
        table.string('email').notNullable().unique();
        table.dateTime('registration_date').notNullable();
        table.enu('status', ['ok', 'next', 'late']).notNullable();
        table.dateTime('last_payment');
        table.integer('payment_frequency').notNullable();
        table.string('training').notNullable();
        table.integer('workout_frequency').notNullable();
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('members');
};
