import express from "express";
import { saveMultiple, search, remove, viewAll } from "../controller/stdio.controller.js";

const router = express.Router();

router.post("/save", saveMultiple);
router.get("/view", viewAll);
router.get("/search/:keyword", search)//done and check
router.delete("/remove/:id", remove);//done and check...

export default router;
