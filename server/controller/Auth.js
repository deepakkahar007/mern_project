const { findUserByEmail } = require("../db/query.js");
const { generateJwtToken, comparePassword } = require("../lib/utils.js");

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

    const isPasswordCorrect = await comparePassword(password, user.password);

    if (isPasswordCorrect) {
      const token = generateJwtToken(
        user.id,
        user.username,
        user.email,
        user.role,
        user.isVerified
      );

      res.cookie("token", token, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        status: true,
        message: `${user.username} login successfully`,
        token,
      });
    } else {
      return res.status(401).json({ status: false, error: "wrong password" });
    }
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
};

module.exports = {
  LoginUser,
};
