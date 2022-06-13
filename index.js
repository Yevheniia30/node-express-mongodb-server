// console.log("SERVER RUNNING...");

import express from "express";
import mongoose from "mongoose";
import User from "./User.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://yevheniia30:yevheniia30@cluster0.imdvglc.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
    console.log(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error.message);
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, console.log(`SERVER RUNNING ON PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
