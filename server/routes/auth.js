import { Router } from "express";
import { verifyLogin, registerUser } from "../controllers/auth.js";
import "../strategy/local-strategy.js";
import passport from "passport";

const router = Router();

// router.post("/login", passport.authenticate("local"), verifyLogin);
router.post("/registration", registerUser);

export default router;
