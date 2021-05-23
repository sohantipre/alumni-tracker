import express from "express";
import {
  addevent,
  getevent,
  geteventbycollege,
} from "../controllers/Eventcontroller.js";
const router = express.Router();

router.route("/event/add").post(addevent);
router.route("/event/:id").get(getevent);
router.route("/event/college/:id").get(geteventbycollege);

export default router;
