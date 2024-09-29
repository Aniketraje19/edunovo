import { Router } from "express";
import { getUsers,getUserById } from "../controllers/user.controller";

const router = Router()

router.route("/").get(getUsers)
router.route("/:id").get(getUserById)


export default router