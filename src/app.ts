import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import BookRouter from "./routes/book.routes";
import UserRouter from "./routes/user.routes"
import TransactionRouter from "./routes/transaction.routes"
import { User } from "./models/user.model";
const app: Express = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN as string,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

app.use("/book",BookRouter)
app.use("/user",UserRouter)
app.use("/transaction",TransactionRouter)

export { app };
