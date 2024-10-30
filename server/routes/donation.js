import { Router } from "express";
import {
  getDonations,
  storeDonations,
  getSingleDonation,
  updateDonations,
  deleteDonations,
} from "../controllers/donation.js";

const router = Router();

router.get("/donations", getDonations);
router.get("/donations", getSingleDonation);
router.post("/donations", storeDonations);
router.put("/donations", updateDonations);
router.delete("/donations", deleteDonations);

export default router;
