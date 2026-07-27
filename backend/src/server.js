import express from "express";
import "dotenv/config";

import AuthRoutes from "./routes/auth.routes.js";
import { mongoDb } from "./config/mongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  mongoDb();
});
