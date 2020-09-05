module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(50),
            allowNull: false
          }
    };

    let config = {
        tableName: 'categories',
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
      Category.belongsToMany(models.Games, {

        as: 'games',
        through: 'games_categories',
        foreignKey: 'id_category',
        otherKey: 'id_game',
        timestamps: true
      });

    };
    
    return Category;
}