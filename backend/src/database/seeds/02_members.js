exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {
          id_member: 1,
          name: 'João Otavio Martini Korczovei',
          cpf: '00123456789',
          cellphone: '44999999999',
          address: 'Avenida Tralálá, 1234',
          email: 'joaokorcz@hotmail.com',
          registration_date: '2020-12-04T15:30:00.000Z',
          status: 'ok',
          last_payment: '2021-02-04T15:30:00.000Z',
          payment_frequency: 1,
          training: 'ABC',
          workout_frequency: 5
        },
      ]);
    });
};