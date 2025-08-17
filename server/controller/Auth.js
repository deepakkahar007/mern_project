const { findUserByEmail } = require("../db/query.js");
const { generateJwtToken } = require("../lib/utils.js");

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(404)
      .json({ status: false, error: "email or password not found" });

  try {
    const user = await findUserByEmail(email);

    if (!user)
      return res
        .status(404)
        .json({ status: false, error: `${email} not found` });

    if (user.password !== password)
      return res.status(401).json({ status: false, error: "wrong password" });

    const token = generateJwtToken(
      user.id,
      user.username,
      user.email,
      user.role,
      user.isVerified
    );

    return res.status(200).json({
      status: true,
      message: `${user.username} login successfully`,
      token,
    });
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

module.exports = {
  LoginUser,
};
