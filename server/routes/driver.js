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
router.get("/driver", getVehicle);
router.get("/driver", getCounty);
router.post("/driver", storeDriver);
router.post("/vehicle", storeVehicle);
router.post("/county", storeCounty);

export default router;
