import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies?.auth_token;

    if (!token) {
      return res.status(401).json({ error: "User not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default verifyToken;
