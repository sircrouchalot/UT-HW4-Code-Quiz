module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    initials: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 4],
      },
    },
    score: 
    {
      type: DataTypes.INTEGER,
    },
  });
  return User;
};
