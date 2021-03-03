import express from "express";
import {
  loginalumni,
  registeralumni,
} from "../controllers/Alumnicontroller.js";

const router = express.Router();

router.route("/alumni/register").post(registeralumni);
router.route("/a;umni/login").post(loginalumni);
export default router;
