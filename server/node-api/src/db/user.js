import User from "../models/Users.js";

export const createUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const newUser = new User(userData);
  await newUser.save(); // password gets hashed automatically
  return newUser;
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email }).select("+password");
};
