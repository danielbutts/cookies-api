
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cookies').del()
    .then(function () {
      // Inserts seed entries
      return knex('cookies').insert([
        {name: 'Oatmeal Raisin', mouthfeel: 'chewy', ingredients: 6, is_delicious: true},
        {name: 'Peanut Butter', mouthfeel: 'gross', ingredients: 4, is_delicious: false},
        {name: 'Ginger Snap', mouthfeel: 'crunchy', ingredients: 5, is_delicious: true},
        {name: 'Snickerdoodle', mouthfeel: 'soft', ingredients: 7, is_delicious: true},
      ]);
    });
};
