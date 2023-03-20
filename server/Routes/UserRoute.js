import express from "express";
import { DeleteUser, followUser, getUser, unfollowUser, UpdateUser } from "../Controller/UserController.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", UpdateUser);
router.delete('/:id',DeleteUser)
router.put('/:id/follow',followUser)
router.put('/:id/unfollow',unfollowUser)
export default router;
