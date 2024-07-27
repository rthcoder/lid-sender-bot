import { Router } from "express";
import bot from "../commands/main.js";

const router = Router();

router.post('/api/bot', bot.BOT);

export default router