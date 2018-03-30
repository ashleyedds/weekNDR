module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      weeklyFunds: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bank: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    
     Person.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
       Person.hasMany(models.Interest, {
         onDelete: "cascade"
       });
  
    //   Person.hasMany(models.BigBudget, {
    //     onDelete: "cascade"
    //   });
     };
  
    return Person;
  };