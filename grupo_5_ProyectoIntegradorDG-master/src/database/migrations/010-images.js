'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_game: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
      location: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      img_url: {
        type: Sequelize.DataTypes.STRING(500),
        
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images')
  }
};
