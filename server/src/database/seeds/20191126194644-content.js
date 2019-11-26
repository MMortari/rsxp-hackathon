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
        {
          id: 3,
          name: 'Mesopotâmia e Egito',
          grade: 1,
          subject_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Hebreus, Fenícios e Persas',
          grade: 1,
          subject_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'Grécia Antiga',
          grade: 1,
          subject_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },


        {
          id: 6,
          name: 'Teoria dos conjuntos e conjuntos numéricos ',
          grade: 1,
          subject_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'Funções',
          grade: 1,
          subject_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: 'Função afim',
          grade: 1,
          subject_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          id: 9,
          name: 'Introdução à Biologia',
          grade: 1,
          subject_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },

         {
          id: 10,
          name: 'Física: para que serve isso?',
          grade: 1,
          subject_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          id: 11,
          name: 'Notação científica ',
          grade: 1,
          subject_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          name: 'Exprimindo as grandezas: sistemas de unidades',
          grade: 1,
          subject_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          name: 'Introdução à química',
          grade: 1,
          subject_id: 7,
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
