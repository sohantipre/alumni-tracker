import asynchandler from "express-async-handler";

import College from "../models/Collegemodel.js";

export const logincollege = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const college = await College.findOne({ email, password });
  if (college) {
    res.json({
      id: college._id,
      name: college.name,
      email: college.email,
      password: college.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registercollege = asynchandler(async (req, res) => {
  const { email, password, name } = req.body;

  const college = await College.create({ email, password, name });
  if (college) {
    res.json({
      id: college._id,
      name: college.name,
      email: college.email,
      password: college.password,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
