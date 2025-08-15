import jwt from "jsonwebtoken";

export const generateJwtToken = (id, username, email, role, varified) => {
  const token = jwt.sign(
    { id },
    // { id, username, email, role, varified },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  return token;
};
