import asynchandler from "express-async-handler";

import Student from "../models/studentmodel.js";
import generateauth from "../utils/generateauth.js";
import College from "../models/Collegemodel.js";
import Alumni from "../models/Alumnimodel.js";

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
      collegename: student.collegename,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registerstudent = asynchandler(async (req, res) => {
  const { email, password, name, collegename } = req.body;
  let followinglist = [];
  let followerlist = [];
  const student = await Student.create({
    email,
    password,
    name,
    collegename,
    followerlist,
    followinglist,
  });
  if (student) {
    res.json({
      id: student._id,
      name: student.name,
      email: student.email,
      password: student.password,
      token: generateauth(student._id),
      collegename: student.collegename,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

export const getstudentbyid = asynchandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) {
    res.json({
      name: student.name,
      email: student.email,
      collegename: student.collegename,
      followerlist: student.followerlist,
      followinglist: student.followinglist,
    });
  } else {
    throw new Error("No such student found!!");
  }
});

export const getstudents = asynchandler(async (req, res) => {
  const students = await Student.find({ collegename: req.params.id });
  if (students) {
    res.json({
      students: students,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

export const getalumnis = asynchandler(async (req, res) => {
  const college = await College.findOne({ name: req.params.id });
  if (college) {
    res.json({
      alumnis: college.alumnis,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

export const followalumni = asynchandler(async (req, res) => {
  const alumni = await Alumni.findById(req.params.id);
  const { id } = req.body;
  const student = await Student.findById(id);
  if (alumni) {
    var s = alumni.followerlist.some((f) => f._id == id);
    if (!s) {
      alumni.followerlist.push(id);
      alumni.save();
      student.followinglist.push(req.params.id);
      student.save();
    }
  }
  res.json({
    f: alumni.followerlist,
  });
});

export const unfollowalumni = asynchandler(async (req, res) => {
  const alumni = await Alumni.findById(req.params.id);
  const { id } = req.body;
  const student = await Student.findById(id);
  if (alumni) {
    var s = alumni.followerlist.filter((f) => f._id != id);
    var r = student.followinglist.filter((f) => f._id != req.params.id);
    // if (!s) {
    //   alumni.followerlist.push(id);
    //   alumni.save();
    //   student.followinglist.push(req.params.id);
    //   student.save();
    // }
    student.followinglist = r;
    student.save();
    alumni.followerlist = s;
    alumni.save();
  }
  res.json({
    f: alumni.followerlist,
  });
});
export const getfollowedalumnis = asynchandler(async (req, res) => {
  const id = req.params.id;
  const alumnis = await Alumni.find({});

  let al = [];

  alumnis.map((a) => {
    var s = a.followerlist.some((o) => o._id == id);
    if (s) {
      al.push({ id: a._id, name: a.name });
    }
  });

  res.json({ alumnis: al });
});
