import { Router } from "express";
import {
  getRecepients,
  getSingleRecepient,
  storeRecepients,
  updateRecepients,
  deleteRecepients,
} from "../controllers/recepient.js";

const router = Router();

router.get("/recepient", getRecepients);
router.get("/recepient", getSingleRecepient);
router.post("/recepient", storeRecepients);
router.put("/recepient", updateRecepients);
router.delete("/recepient", deleteRecepients);
export default router;
