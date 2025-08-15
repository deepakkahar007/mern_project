import { generateJwtToken } from "../lib/utils.js";
import { UserModel } from "../models/UserModel.js";

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(404).json({ error: "email or password not found" });

    const user = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(404).json({ error: `${email} not found` });

    if (user.password !== password)
      return res.status(401).json({ error: "wrong password" });

    // const token = generateJwtToken(
    //   user.id
    //   //   user.name,
    //   //   user.email,
    //   //   user.role,
    //   //   user.isVerified
    // );

    return res.status(200).json({ data: "hello", user });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
