import { Router } from "express";
import {
  getRecipients,
  getDonations,
  getCounties,
  getBarGraph,
  getPieChart,
  getCurveGraph,
  getLineGraph,
} from "../controllers/report.js";

const router = Router();

router.get("/report/recipients", getRecipients);
router.get("/report/donations", getDonations);
router.get("/report/counties", getCounties);
router.get("/report/barGraph", getBarGraph);
router.get("/report/pieChart", getPieChart);
router.get("/report/curveGraph", getCurveGraph);
router.get("/report/lineGraph", getLineGraph);

export default router;
