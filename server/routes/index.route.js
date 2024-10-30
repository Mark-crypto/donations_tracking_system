import { Router } from "express";
import donationRouter from "./donation.js";
import recepientRouter from "./recepient.js";
import csvRouter from "./csv.js";
import driverRouter from "./driver.js";

const router = Router();
router.use(donationRouter);
router.use(recepientRouter);
router.use(csvRouter);
router.use(driverRouter);

export default router;
