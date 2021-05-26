import express from "express";
import {
  logincollege,
  registercollege,
  getalumnis,
  getcollegebyid,
} from "../controllers/Collegecontroller.js";

import { collegeauth } from "../middleware/collegeauth.js";
const router = express.Router();

router.route("/college/login").post(logincollege);
router.route("/college/register").post(registercollege);
router.route("/college/getalumnis").get(collegeauth, getalumnis);
router.route("/college/collegeprofile/:id").get(getcollegebyid);

export default router;
