const {
  createUser,
  findUserById,
  getAllUser,
  deleteUserById,
} = require("../db/query");

const GetAllUser = async (req, res) => {
  try {
    const user = await getAllUser();
    return res.status(200).json({ status: true, users: user, req: req.user });
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

const CreateUser = async (req, res) => {
  const { username, email, password, avatar_url, role, isVerified } = req.body;

  if (
    !req.body ||
    !username ||
    !email ||
    !password ||
    !avatar_url ||
    !role ||
    !isVerified
  ) {
    return res.status(401).json({ status: false, error: "data not found" });
  }

  try {
    const user = await createUser(
      username,
      email,
      password,
      avatar_url,
      role,
      isVerified
    );

    return res.status(201).json({
      status: true,
      message: `${user.username} created successfully`,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

const GetUser = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ status: false, error: `no id found` });

  try {
    const user = await findUserById(id);

    if (!user)
      return res
        .status(200)
        .json({ status: false, message: `no user found with ${id} id` });

    return res.status(200).json({ status: true, user: user });
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

const UpdateUser = async (req, res) => {
  return res.status(200).json({ message: "route working", id: req.params.id });
};

const DeleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ status: false, error: `no id found` });

  try {
    const user = await deleteUserById(id);

    if (!user)
      return res
        .status(200)
        .json({ status: false, message: `no user found with ${id} id` });

    return res
      .status(200)
      .json({ status: true, message: `${id} deleted successfully` });
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

module.exports = {
  GetAllUser,
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
};
