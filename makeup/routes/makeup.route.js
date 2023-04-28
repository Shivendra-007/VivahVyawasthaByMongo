import express from "express";
import {  search,  viewAll ,viewById, savemakeup, activatemakeup, activemakeupList, removeById} from "../controller/makeup.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/save",
// body("title").notEmpty(),
// body("experince").notEmpty(),
// body("address").notEmpty(),
// body("thumbnail").notEmpty(),
// body("discription").notEmpty(),
// body("rating").notEmpty(),
// body("services").notEmpty(),
// body("longitude").notEmpty(),
// body("latitude").notEmpty()
savemakeup);              
router.post("/activeList",activemakeupList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active",activatemakeup);
router.post("/removeById",removeById);


export default router;
