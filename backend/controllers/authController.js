import User from "../models/UserSchema.js";

export const register = async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
