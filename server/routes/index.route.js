import { Router } from "express";
import donationRouter from "./donation.js";
import recepientRouter from "./recepient.js";
import csvRouter from "./csv.js";
import driverRouter from "./driver.js";
import qrRouter from "./qr.js";
import reportRouter from "./report.js";
import logRouter from "./log.js";
import authRouter from "./auth.js";

const router = Router();
router.use(donationRouter);
router.use(recepientRouter);
router.use(csvRouter);
router.use(driverRouter);
router.use(qrRouter);
router.use(reportRouter);
router.use(logRouter);
router.use(authRouter);

export default router;
