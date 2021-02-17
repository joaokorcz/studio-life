
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('finances').del()
    .then(function () {
      // Inserts seed entries
      /*return knex('finances').insert([
      ]);*/
    });
};
