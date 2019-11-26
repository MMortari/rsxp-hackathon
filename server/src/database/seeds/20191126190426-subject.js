module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'subject',
      [
        {
          id: 1,
          name: 'Português',
          color: '#B968C6',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Matemática',
          color: '#6179FF',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'História',
          color: '#03BBD3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Geografia',
          color: '#03BFA6',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'Biologia',
          color: '#EC3E7C',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'Física',
          color: '#EE6401',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'Química',
          color: '#F35245',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: 'Inglês',
          color: '#F89122',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: 'Filosofia',
          color: '#F7B016',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('subject', null, {});
  },
};
