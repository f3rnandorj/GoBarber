module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      date: {
        // data do agendamento
        type: Sequelize.DATE,
        allowNull: false,
      },

      user_id: {
        // referencia do usuario que vai agendar o sv
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },

      provider_id: {
        // referencia do provedor que vai atuar com o sv
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },

      canceled_at: {
        type: Sequelize.DATE,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('appointments'),
};
