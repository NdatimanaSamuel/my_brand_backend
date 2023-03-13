import express from "express";
import showMessageController from "../controllers/showMessageController.js";

const router = express.Router();

router.get("/", showMessageController);


export default router;