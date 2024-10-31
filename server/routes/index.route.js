import { Router } from "express";
import donationRouter from "./donation.js";
import recepientRouter from "./recepient.js";
import csvRouter from "./csv.js";
import driverRouter from "./driver.js";
import qrRouter from "./qr.js";

const router = Router();
router.use(donationRouter);
router.use(recepientRouter);
router.use(csvRouter);
router.use(driverRouter);
router.use(qrRouter);

export default router;
