import { Router } from "express";
import User from "../model/User.js";

const router = new Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
    console.log(error.message);
  }
});
router.post("/user", async (req, res) => {
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
router.get("/users/:id");
router.put("/user");
router.delete("/user/:id");

export default router;
