import asynchandler from "express-async-handler";

import Alumni from "../models/Alumnimodel.js";
import College from "../models/Collegemodel.js";
import generateauth from "../utils/generateauth.js";

export const loginalumni = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const alumni = await Alumni.findOne({ email, password });
  if (alumni) {
    res.json({
      id: alumni._id,
      name: alumni.name,
      email: alumni.email,
      password: alumni.password,
      token: generateauth(alumni._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registeralumni = asynchandler(async (req, res) => {
  const { email, password, name, collegename } = req.body;

  const alumni = await Alumni.create({ email, password, name, collegename });
  const college = await College.findOne({ name: collegename });
  if (!college) {
    throw new Error("No Such college");
  } else if (college && alumni) {
    college.alumnis = college.alumnis.concat({ name, id: alumni._id });
    await college.save();
  }
  if (alumni) {
    res.json({
      id: alumni._id,
      name: alumni.name,
      email: alumni.email,
      password: alumni.password,
      token: generateauth(college._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

export const getalumnibyid = asynchandler(async (req, res) => {
  const alumni = await Alumni.findById(req.params.id);
  if (alumni) {
    res.json({
      name: alumni.name,
      email: alumni.email,
      collegename: alumni.collegename,
    });
  } else {
    throw new Error("No such alumni found!!");
  }
});
