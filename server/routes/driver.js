import { Router } from "express";
import {
  storeDriver,
  storeVehicle,
  storeCounty,
} from "../controllers/driver.js";
const router = Router();

router.post("/driver", storeDriver);
router.post("/vehicle", storeVehicle);
router.post("/county", storeCounty);

export default router;
