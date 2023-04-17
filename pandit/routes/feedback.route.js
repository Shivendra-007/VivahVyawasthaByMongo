import express from "express";
import { saveMultiple, remove, viewAll } from "../controller/feedback.controller.js";
let router = express.Router();

router.post("/save", saveMultiple);
router.get("/view", viewAll);
router.delete("/remove/:id", remove);//done and check...

export default router;



