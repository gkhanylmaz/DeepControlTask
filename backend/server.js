import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userController from "./controllers/userController.js";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://dedeman58:112515gokhan@cluster0.nicqd0l.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/users/", userController);

//Create Port

const PORT = process.env.PORT || 5000;

//Listen

app.listen(PORT, () => {
  console.log(`Server at running on the  port:http://localhost: ${PORT}`);
});
