import express from "express";
import "dotenv/config";

import AuthRoutes from "./routes/auth.routes.js";
import UserRoutes from "./routes/user.routes.js";
import PostRoutes from "./routes/post.routes.js";
import NotificationRoutes from "./routes/notification.routes.js";

import { mongoDb } from "./config/mongoDb.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/posts", PostRoutes);
app.use("/api/notifications", NotificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  mongoDb();
});
