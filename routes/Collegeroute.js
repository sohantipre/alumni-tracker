import express from "express";
import {
  logincollege,
  registercollege,
} from "../controllers/Collegecontroller.js";

const router = express.Router();

router.route("/college/login").post(logincollege);
router.route("/college/register").post(registercollege);

export default router;
