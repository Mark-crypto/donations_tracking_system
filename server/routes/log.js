import { Router } from "express";
import { getDonationLogs, getRecipientLogs } from "../controllers/log.js";

const router = Router();

router.get("/logs/donations", getDonationLogs);
router.get("/logs/recipients", getRecipientLogs);
export default router;
