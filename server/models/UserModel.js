const { DataTypes } = require("sequelize");
const { sequelize } = require("../lib/db");
const { hashPassword } = require("../lib/utils");

const UserModel = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM,
    allowNull: false,
    defaultValue: "USER",
    values: ["ADMIN", "USER"],
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

UserModel.beforeCreate(async (user) => {
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
});

module.exports = { UserModel };
