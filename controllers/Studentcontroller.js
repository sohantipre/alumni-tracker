import asynchandler from "express-async-handler";

import Student from "../models/studentmodel.js";

// export const loginuser = asynchandler(async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (user && (await user.matchpassword(password))) {
//       res.json({
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         password: user.password,
//         isAdmin: user.isAdmin,
//         token: user.token ? user.token : generateauth(user._id),
//       });
//     } else {
//       res.status(401);
//       throw new Error("Invalid email or password");
//     }
//   });

export const loginstudent = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email, password });
  if (student) {
    res.json({
      id: student._id,
      name: student.name,
      email: student.email,
      password: student.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

export const registerstudent = asynchandler(async (req, res) => {
  const { email, password, name } = req.body;

  const student = await Student.create({ email, password, name });
  if (student) {
    res.json({
      id: student._id,
      name: student.name,
      email: student.email,
      password: student.password,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
