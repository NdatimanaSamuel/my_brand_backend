import express from "express";
import sendMessageController from "../controllers/sendMessageController.js";

const router = express.Router();

router.post("/", sendMessageController);


export default router;