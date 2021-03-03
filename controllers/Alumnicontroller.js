import asynchandler from "express-async-handler";

import Alumni from "../models/Alumnimodel.js";

export const loginalumni = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const alumni = await Alumni.findOne({ email, password });
  if (alumni) {
    res.json({
      id: alumni._id,
      name: alumni.name,
      email: alumni.email,
      password: alumni.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registeralumni = asynchandler(async (req, res) => {
  const { email, password, name } = req.body;

  const alumni = await Alumni.create({ email, password, name });
  if (alumni) {
    res.json({
      id: alumni._id,
      name: alumni.name,
      email: alumni.email,
      password: alumni.password,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
