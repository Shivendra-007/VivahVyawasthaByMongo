import express from "express";
import { saveMultiple, remove, viewAll } from "../controller/request.controller.js";
import {body} from 'express-validator';
let router = express.Router();

router.post("/save",
body("customerName").notEmpty(),
body("contactNumber").notEmpty(),
body("totalGeust").notEmpty(),
body("requestDate").notEmpty(), saveMultiple);
router.get("/view", viewAll);
router.delete("/remove/:id", remove);//done and check...
// router.get("/search/:date",searchBydate)


export default router;




