import { UserModel } from "../models/UserModel.js";

export const GetAllUser = async (req, res) => {
  try {
    const user = await UserModel.findAll();
    // const user = await UserModel.create({
    //   username: "John",
    //   email: "john@example.com",
    //   password: "1234",
    //   avatar_url: "https://example.com/avatar.jpg",
    //   role: "admin",
    //   isVerified: true,
    // });
    return res.status(200).json({ data: "hello", user });
  } catch (err) {
    console.error(err.errors || err.message || err);
    return res.status(500).json({ error: err });
  }
};
