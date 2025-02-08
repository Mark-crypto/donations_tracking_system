import { Router } from "express";
import {
  storeDriver,
  storeVehicle,
  storeCounty,
  getDriver,
  getVehicle,
  getCounty,
} from "../controllers/driver.js";
const router = Router();

router.get("/driver", getDriver);
router.get("/vehicle", getVehicle);
router.get("/county", getCounty);
router.post("/driver", storeDriver);
router.post("/vehicle", storeVehicle);
router.post("/county", storeCounty);

export default router;
