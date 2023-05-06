import express from "express";
import {  search,  viewAll ,viewById, savemakeup, activatemakeup, activemakeupList, removeById, topList} from "../controller/makeup.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/save",
body("title").notEmpty(),
body("experince").notEmpty(),
body("contactNumber","Empty No.").notEmpty(),
body("address").notEmpty(),
body("thumbnail").notEmpty(),
body("discription").notEmpty(),
body("rating").notEmpty(),
body("license").notEmpty(),
body("services").notEmpty(),
body("longitude").notEmpty(),
body("latitude").notEmpty()
, savemakeup);              
router.post("/activeList",activemakeupList)
router.get("/view", viewAll);
router.get("/topList", topList);
router.get("/viewById", viewById);
router.get("/search/:query", search)
router.post("/active",activatemakeup);
router.post("/removeById",removeById);


export default router;
