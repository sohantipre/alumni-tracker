import express from "express";
import {
  loginalumni,
  registeralumni,
  getalumnibyid,
} from "../controllers/Alumnicontroller.js";

const router = express.Router();

router.route("/alumni/register").post(registeralumni);
router.route("/alumni/login").post(loginalumni);
router.route("/alumni/alumniprofile/:id").get(getalumnibyid);
export default router;
