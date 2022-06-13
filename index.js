// console.log("SERVER RUNNING...");

import express from "express";
import mongoose from "mongoose";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://yevheniia30:yevheniia30@cluster0.imdvglc.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("working aaaaaa");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
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
