import express from 'express';
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from 'cookie-parser';
import { errorMiddlewares } from './middlewares/error.js';
import cors from "cors";

export const app =  express();

config({
    path: "./data/config.env",
});
// const router = express.Router();

app.use(express.json());          //using midleware
app.use(cookieParser());
app.use("/api/v1/users", userRouter);     //using routes
app.use("/api/v1/task", taskRouter);     //using routes
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);

app.use(errorMiddlewares);

app.get("/", (req, res) => {
    res.send("Nice Working")
});

