import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./ConnectDB.js";
import perfumesRouter from "./Routes/Perfumes.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

app.use(express.json());

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api", perfumesRouter);

app.listen(`${process.env.PORT}`, function () {
  try {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectToDB();
  } catch (err) {
    console.error("error:", err);
  }
});
