import express from "express";
import {
  loginstudent,
  registerstudent,
  getstudents,
  getfollowedalumnis,
  followalumni,
  unfollowalumni,
  getstudentbyid,
  getalumnis,
} from "../controllers/Studentcontroller.js";

const router = express.Router();

router.route("/student/register").post(registerstudent);
router.route("/student/login").post(loginstudent);
router.route("/student/getstudents/:id").get(getstudents);
router.route("/student/getalumnis/:id").get(getalumnis);
router.route("/student/studentprofile/:id").get(getstudentbyid);
router.route("/student/follow/:id").post(followalumni);
router.route("/student/unfollow/:id").post(unfollowalumni);
router.route("/student/getfollowedalumnis/:id").get(getfollowedalumnis);

export default router;
