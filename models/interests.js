module.exports = function(sequelize, DataTypes) {
    var Interest = sequelize.define("Interest", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,160]
        }
      },
      estCost: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      actualCost: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      eventDate: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  
     Interest.associate = function(models) {
       Interest.belongsTo(models.Person, {
         foreignKey: {
           allowNull: false
         }
       });
     };
  
    return Interest;
  };