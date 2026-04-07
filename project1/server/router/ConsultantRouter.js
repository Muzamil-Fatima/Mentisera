import express from "express";
import { createConsultant } from "../controller/ConsultantController.js";

const router = express.Router();

router.post("/createConsultant", createConsultant);

export default router;