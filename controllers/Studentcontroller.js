import asynchandler from "express-async-handler";

import Student from "../models/studentmodel.js";
import generateauth from "../utils/generateauth.js";

export const loginstudent = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email, password });
  if (student) {
    res.json({
      id: student._id,
      name: student.name,
      email: student.email,
      password: student.password,
      token: generateauth(student._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registerstudent = asynchandler(async (req, res) => {
  const { email, password, name, collegename } = req.body;

  const student = await Student.create({ email, password, name, collegename });
  if (student) {
    res.json({
      id: student._id,
      name: student.name,
      email: student.email,
      password: student.password,
      token: generateauth(student._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
