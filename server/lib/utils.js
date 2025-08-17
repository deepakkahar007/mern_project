const { sign, verify, decode } = require("jsonwebtoken");

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

const decodeJwtToken = (token) => {
  return decode(token);
};

module.exports = { generateJwtToken, verifyJwtToken, decodeJwtToken };
