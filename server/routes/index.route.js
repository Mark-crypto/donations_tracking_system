import donationRouter from "./donation";
import recepientRouter from "./recepient";
import csvRouter from "./csv";
import { Router } from "express";

const router = Router();
router.use(donationRouter);
router.use(recepientRouter);
router.use(csvRouter);

export default router;
