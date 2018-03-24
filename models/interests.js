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
        len: [1]
      },
      estCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
          }
      }
    });
  
    Interest.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Interest.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Interest;
  };