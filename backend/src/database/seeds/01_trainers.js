
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainers').insert([
        {
          id_trainer: 1,
          name: 'Davi',
          login: 'davi',
          password: '123456'
        },
        {
          id_trainer: 2,
          name: 'Lilian',
          login: 'lilian',
          password: '123456'
        },
        {
          id_trainer: 3,
          name: 'Outro',
          login: 'outro',
          password: '123456'
        }
      ]);
    });
};
