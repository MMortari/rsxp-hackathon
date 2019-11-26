module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'lesson',
      [
        {
          name: 'O maior conflito militar de todos os tempos',
          content_id: 2,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Entre a Primeira e a Segunda Guerra',
          content_id: 2,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Antecedentes militares',
          content_id: 2,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'O "Eixo" predomina (1939–1941)',
          content_id: 2,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Os "Aliados" reagem e vencem (1942–1945)',
          content_id: 2,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'As conferencias de paz: nasce o mundo do pós–guerra',
          content_id: 2,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Causas gerais da Primeira Guerra Mundial',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Causa imediata da guerra',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Paz Armada',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Etapas do conflito',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'As discussões sobre a paz',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A situação peculiar da Rússia',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Rússia em 1905',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Oposições na Rússia czarista',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A Revolução Russa',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A direção de Lênin',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'A direção de Stalin',
          content_id: 1,
          content: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('lesson', null, {});
  },
};
