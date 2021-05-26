import asynchandler from "express-async-handler";
import generateauth from "../utils/generateauth.js";
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
      token: generateauth(college._id),
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
      token: generateauth(college._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

export const getcollegebyid = asynchandler(async (req, res) => {
  const college = await College.findById(req.params.id);
  if (college) {
    res.json({
      name: college.name,
      email: college.email,
      alumnis: college.alumnis,
    });
  } else {
    throw new Error("No such college found!!");
  }
});

export const getalumnis = asynchandler(async (req, res) => {
  const college = await College.findById(req.college._id);
  if (college) {
    res.json({
      alumnis: college.alumnis,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
