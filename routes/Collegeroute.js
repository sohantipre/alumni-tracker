import express from "express";
import {
  logincollege,
  registercollege,
  getalumnis,
} from "../controllers/Collegecontroller.js";

import { collegeauth } from "../middleware/collegeauth.js";
const router = express.Router();

router.route("/college/login").post(logincollege);
router.route("/college/register").post(registercollege);
router.route("/college/getalumnis").get(collegeauth, getalumnis);

export default router;
