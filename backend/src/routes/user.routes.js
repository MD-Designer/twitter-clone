import express from "express";
import { followUnfollowUser, getUserProfile, getSuggestedUser,updateUserProfile } from "../controllers/user.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/prodile/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUser);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUserProfile);

export default router;
