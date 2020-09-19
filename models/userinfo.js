var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  UserInfo.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
 
  return UserInfo;
};
