import { Router } from "express";
import { recepientsCSV, donationsCSV, logsCSV } from "../controllers/csv";

const router = Router();

router.get("/recepients-csv", recepientsCSV);
router.get("/donations-csv", donationsCSV);
router.get("/logs-csv", logsCSV);

export default router;
