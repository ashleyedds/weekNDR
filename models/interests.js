module.exports = function(sequelize, DataTypes) {
    var Interest = sequelize.define("Interest", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,160]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        estCost: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Interest;
  };