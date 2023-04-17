import express from "express";
import { saveMultiple, remove, viewAll } from "../controller/service.controller.js";
import { body } from "express-validator";
let router = express.Router();

router.post("/save",
body("serviceName").notEmpty(),
body("rate").notEmpty(), saveMultiple);
router.get("/view", viewAll);
router.delete("/remove/:id", remove);//done and check...
// router.get("/search/:date",searchBydate)


export default router;
/*
http://localhost:8009/request/save
http://localhost:8009/request/view
http://localhost:8009/request/remove/{_id}
 */




