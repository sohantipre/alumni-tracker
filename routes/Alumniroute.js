import express from "express";
import {
  loginalumni,
  registeralumni,
  getalumnibyid,
  followstudent,
  unfollowstudent,
  getfollowedstudents,
} from "../controllers/Alumnicontroller.js";

const router = express.Router();

router.route("/alumni/register").post(registeralumni);
router.route("/alumni/login").post(loginalumni);
router.route("/alumni/alumniprofile/:id").get(getalumnibyid);
router.route("/alumni/follow/:id").post(followstudent);
router.route("/alumni/unfollow/:id").post(unfollowstudent);
router.route("/alumni/getfollowedstudents/:id").get(getfollowedstudents);
export default router;
