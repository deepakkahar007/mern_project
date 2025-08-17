const { findUserByEmail } = require("../db/query");
const { verifyJwtToken } = require("../lib/utils");

const AdminAuthMiddleware = (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ status: false, error: "Token not found" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyJwtToken(token);

    if (payload.role !== "ADMIN") {
      return res.status(401).json({ status: false, error: "Unauthorized" });
    }
    req.user = {
      id: payload.id,
      username: payload.username,
      email: payload.email,
      isVerified: payload.isVerified,
      role: payload.role,
    };
    next();
  } catch (error) {
    return res.status(401).json({ status: false, error: error.message });
  }
};

const UserAuthMiddleware = (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];
  return;
};

module.exports = { AdminAuthMiddleware, UserAuthMiddleware };
