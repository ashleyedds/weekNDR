module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
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
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  
  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });

    Author.hasMany(models.BigBudget, {
      onDelete: "cascade"
    });
  };

  return Author;
};
