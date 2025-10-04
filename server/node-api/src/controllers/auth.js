import { auth, db } from "../config/firebase-config.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const clientAuth = getAuth();

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const handleUserRegistration = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "Missing required fields" });

  try {
    // creating user in firebase authentication
    const user = await auth.createUser({
      email: email,
      password: password,
    });

    // Db query to add user to firestore
    await db.collection("users").doc(user.uid).set({
      email: user.email,
      name: name,
      createdAt: new Date().toISOString(),
    });

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
    // authenticate user using firebase auth -> method throws error if credentials are wrong
    const userRecord = await signInWithEmailAndPassword(
      clientAuth,
      email,
      password
    );
    const userId = userRecord.user.uid;

    // get user details from db
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists)
      return res.status(401).json({ error: "User not found" });

    const userData = userDoc.data();

    // create a jwt token
    const token = jwt.sign(
      {
        uid: userId,
        email: userData.email,
        name: userData.name,
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
      .json({ message: "User logged in successfully" });
  } catch (error) {
    console.error("Error while log in", error);
    res.status(500).json({ error: "Failed to login: " + error.message });
  }
};

const handleUserLogout = (req, res) => {
  // clear cookie from browser
  res
    .status(200)
    .clearCookie("auth-token", {
      httpOnly: true,
      secure: process.env.WORK_ENV === "production",
      sameSite: "strict",
    })
    .json({ message: "User logged out successfully" });
};

export { handleUserRegistration, handleUserLogin, handleUserLogout };
