import asynchandler from "express-async-handler";

import Alumni from "../models/Alumnimodel.js";
import College from "../models/Collegemodel.js";
import Student from "../models/studentmodel.js";
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
      collegename: alumni.collegename,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registeralumni = asynchandler(async (req, res) => {
  const { email, password, name, collegename } = req.body;
  let followinglist = [];
  let followerlist = [];
  const alumni = await Alumni.create({
    email,
    password,
    name,
    collegename,
    followinglist,
    followerlist,
  });
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
      collegename: alumni.collegename,
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
      followerlist: alumni.followerlist,
      followinglist: alumni.followinglist,
    });
  } else {
    throw new Error("No such alumni found!!");
  }
});

export const followstudent = asynchandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  const { id } = req.body;
  const alumni = await Alumni.findById(id);
  if (student) {
    var s = student.followerlist.some((f) => f._id == id);
    if (!s) {
      student.followerlist.push(id);
      student.save();
      alumni.followinglist.push(req.params.id);
      alumni.save();
    }
  }
  res.json({
    f: student.followerlist,
  });
});

export const unfollowstudent = asynchandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  const { id } = req.body;
  const alumni = await Alumni.findById(id);
  if (student) {
    var s = student.followerlist.filter((f) => f._id != id);
    var r = alumni.followinglist.filter((f) => f._id != req.params.id);
    // if (!s) {
    //   alumni.followerlist.push(id);
    //   alumni.save();
    //   student.followinglist.push(req.params.id);
    //   student.save();
    // }
    student.followerlist = s;
    student.save();
    alumni.followinglist = r;
    alumni.save();
  }
  res.json({
    f: student.followerlist,
  });
});
export const getfollowedstudents = asynchandler(async (req, res) => {
  const id = req.params.id;
  const students = await Student.find({});

  let al = [];

  students.map((a) => {
    var s = a.followerlist.some((o) => o._id == id);
    if (s) {
      al.push({ id: a._id, name: a.name });
    }
  });

  res.json({ students: al });
});
