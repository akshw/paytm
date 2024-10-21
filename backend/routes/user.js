const express = require("express");
const router = express.Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User, Account } = require("../db");
const { authMiddleware } = require("./middleware");

// Signup route
router.post("/signup", async (req, res) => {
  const reqBody = req.body;
  if (!reqBody) {
    console.log("error");
    return res.status(411).json({
      msg: "incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: reqBody.username,
  });
  if (existingUser) {
    return res.status(411).json({
      msg: "email alredy exist",
    });
  }

  const user = await User.create({
    username: reqBody.username,
    password: reqBody.password,
    email: reqBody.email,
  });
  const userId = user._id;

  //creating acc with random balance
  await Account.create({
    userId,
    balance: Math.round(Math.random() * 10000000000),
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: "user created sucessfully",
    token: token,
  });
});

// Signin route
router.post("/signin", async (req, res) => {
  const existingUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!existingUser) {
    return res.status(411).json({
      msg: "incorrect inputs",
    });
  }
  const userId = existingUser._id;
  req.userId = userId;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: "logged in sucessfully",
    token: token,
  });
});

//Update route
const updateBody = z.object({
  password: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
});
router.put("/update", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(400).json({
      msg: "incorret inputs",
    });
  }

  await User.updateOne(req.body, {
    _id: req.userId,
  });

  res.status(200).json("updated sucessfully");
});

//get user route
router.get("/bulk", authMiddleware, async (req, res) => {
  try {
    const query = req.query.filter?.trim();

    let users;

    if (query) {
      users = await User.find({
        username: {
          $regex: query,
          $options: "i",
        },
      });
    } else {
      users = await User.find();
    }

    const filteredUsers = users.map((user) => ({
      username: user.username,
    }));

    res.json({
      user: filteredUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

module.exports = router;
