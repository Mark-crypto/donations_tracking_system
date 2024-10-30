import { Router } from "express";
import { verifyLogin, registerUser } from "../controllers/auth.js";
const router = Router();

router.post("/login", verifyLogin);
router.post("/registration", registerUser);
