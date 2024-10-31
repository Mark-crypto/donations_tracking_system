import { Router } from "express";
import {
  getRecepients,
  getSingleRecepient,
  storeRecepients,
  updateRecepients,
  deleteRecepients,
} from "../controllers/recepient.js";

const router = Router();

router.get("/recepients", getRecepients);
router.get("/recepients/:id", getSingleRecepient);
router.post("/recepients", storeRecepients);
router.put("/recepients/:id", updateRecepients);
router.delete("/recepients/:id", deleteRecepients);
export default router;
