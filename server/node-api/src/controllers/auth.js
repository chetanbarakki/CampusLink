import { createUser, findUserByEmail } from "../db/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config({ quiet: true });

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const handleUserRegistration = async (req, res) => {
  const userData = req.body;

  if (!userData) return res.status(400).json({ error: "Empty User Data" });

  try {
    // add user entry
    const user = await createUser(userData);

    // send successful register
    res
      .status(201)
      .json({ uid: user.uid, message: "User registered sucessfully" });
  } catch (error) {
    console.error("Error while sign up", error);
    res
      .status(500)
      .json({ error: "Failed to register User: " + error.message });
  }
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Missing email or password" });

  try {
    // find if user exists
    const user = await findUserByEmail(email);

    if (!user) return res.status(404).json({ error: "User not found" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    // create a jwt token
    const token = jwt.sign(
      {
        uid: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: 60 * 60 * 24 }
    );

    // send the resposnse with the jwt cookie
    res
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.WORK_ENV === "production",
        maxAge: 60 * 60 * 24 * 1000,
      })
      .status(200)
      .json({
        message: "User logged in successfully",
        data: {
          uid: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
  } catch (error) {
    console.error("Error while log in", error);
    res.status(500).json({ error: "Failed to login: " + error.message });
  }
};

const handleUserLogout = (req, res) => {
  // clear cookie from browser
  res
    .status(200)
    .clearCookie("auth_token", {
      httpOnly: true,
      secure: process.env.WORK_ENV === "production",
      sameSite: "strict",
    })
    .json({ message: "User logged out successfully" });
};

export { handleUserRegistration, handleUserLogin, handleUserLogout };
