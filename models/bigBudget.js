module.exports = function(sequelize, DataTypes) {
    var BigBudget = sequelize.define("BigBudget", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,160]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      estCost: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      eventDate: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
  
    BigBudget.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      BigBudget.belongsTo(models.Person, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return BigBudget;
  };
  