module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'content',
      [
        {
          id: 1,
          name: 'A Grande Guerra e o socialismo na Rússia',
          grade: 1,
          subject_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'A segunda grande Guerra Mundial',
          grade: 1,
          subject_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('content', null, {});
  },
};
