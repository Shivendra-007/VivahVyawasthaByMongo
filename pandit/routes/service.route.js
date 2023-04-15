import express from "express";
import { saveMultiple, remove, viewAll } from "../controller/service.controller.js";
let router = express.Router();

router.post("/save",
body("serviceName").notEmpty(),
body("rate").notEmpty(), saveMultiple);
router.get("/view", viewAll);
router.delete("/remove/:id", remove);//done and check...

export default router;


