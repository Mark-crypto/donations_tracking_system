import { Router } from "express";
import { getQR, storeQR } from "../controllers/qr.js";
const router = Router();

router.get("/qrscan", getQR);
router.post("/qrscan", storeQR);

export default router;
