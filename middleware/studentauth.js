import jwt from "jsonwebtoken";
import Student from "../models/studentmodel.js";
import asynchandler from "express-async-handler";
import dotenv from "dotenv";
dotenv.config();

export const collegeauth = asynchandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "ABCD");
      req.college = await Student.findById(decoded.id);
      console.log(req.college._id);
      next();
    } catch (E) {
      res.status(401).send();
      throw new Error("Not Authorised");
    }

  if (!token) {
    throw new Error("Not Authorised");
  }
});
