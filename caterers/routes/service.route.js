import express from "express";
import { saveMultiple, remove, viewAll } from "../controller/service.controller.js";
import { body } from "express-validator";
let router = express.Router();
router.post("/save",
    body("serviceName").notEmpty(),
    body("rate").notEmpty(),
    saveMultiple);
router.get("/view", viewAll);
router.delete("/remove/:id", remove);

export default router;




