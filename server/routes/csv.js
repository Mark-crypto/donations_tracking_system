import { Router } from "express";
import { recepientsCSV, donationsCSV } from "../controllers/csv.js";

const router = Router();

router.get("/recepients-csv", recepientsCSV);
router.get("/donations-csv", donationsCSV);
//router.get("/logs-csv", logsCSV);

export default router;
