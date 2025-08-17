const { UserModel } = require("../models/UserModel");

const getAllUser = async () => {
  return await UserModel.findAll();
};

const findUserByEmail = async (email) => {
  return await UserModel.findOne({
    where: {
      email: email,
    },
  });
};

const createUser = async (
  username,
  email,
  password,
  avatar_url,
  role,
  isVerified
) => {
  return await UserModel.create({
    username: username,
    email: email,
    password: password,
    avatar_url: avatar_url,
    role: role,
    isVerified: isVerified,
  });
};

const findUserById = async (id) => {
  return await UserModel.findByPk({
    where: {
      id: id,
    },
  });
};

const deleteUserById = async (id) => {
  return UserModel.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllUser,
  findUserByEmail,
  createUser,
  findUserById,
  deleteUserById,
};
