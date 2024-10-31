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
router.get("/donations/:id", getSingleDonation);
router.post("/donations", storeDonations);
router.put("/donations/:id", updateDonations);
router.delete("/donations/:id", deleteDonations);

export default router;
