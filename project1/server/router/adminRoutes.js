import express from "express";
import {
  getAllConsultant,
  getPendingConsultant,
} from "../controller/ConsultantController.js";

const router = express.Router();

router.post("/all-consultant", getAllConsultant);
router.get("/pending-consultant", getPendingConsultant);
export default router;
