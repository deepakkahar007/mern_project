const { sign, verify } = require("jsonwebtoken");
const { compare, hash, genSalt } = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await genSalt(10);

  return await hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
};

const generateJwtToken = (id, username, email, role, isVerified) => {
  return sign(
    { id, username, email, role, isVerified },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

const verifyJwtToken = (token) => {
  return verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateJwtToken,
  verifyJwtToken,
  hashPassword,
  comparePassword,
};
