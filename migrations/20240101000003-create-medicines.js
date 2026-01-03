'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prakriti: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shakti: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rogName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rogGati: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      rogiPrakriti: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      mansikLakshan: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      vishishtLakshan: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      vyapakLakshan: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      utkatIchha: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      masikDharm: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      puranak: {
        type: Sequelize.STRING,
        allowNull: true
      },
      saman: {
        type: Sequelize.STRING,
        allowNull: true
      },
      virodhi: {
        type: Sequelize.STRING,
        allowNull: true
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicines');
  }
};

