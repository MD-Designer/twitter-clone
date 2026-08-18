import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;

    console.log("🔥 TOKEN EXISTS:", !!token);

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    console.log("🔥 DECODE:", decode);

    if (!decode?.userId) {
      return res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
    }

    const user = await User.findById(decode.userId).select("-password");

    console.log("🔥 USER FROM DB:", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    console.log("🔥 REQ.USER:", req.user);

    next();
  } catch (error) {
    console.log("🔥 PROTECT ERROR:", error.message);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};