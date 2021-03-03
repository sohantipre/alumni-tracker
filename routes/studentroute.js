import express from "express";
import {
  loginstudent,
  registerstudent,
} from "../controllers/Studentcontroller.js";

const router = express.Router();

router.route("/student/register").post(registerstudent);
router.route("/student/login").post(loginstudent);

export default router;
