import express from "express";
import {  search,  viewAll ,viewById, savepandit, activatepandit, activepanditList, removeById, premiumList} from "../controller/pandit.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/save",
body("title").notEmpty(),
body("experince").notEmpty(),
body("address").notEmpty(),
body("thumbnail").notEmpty(),
body("discription").notEmpty(),
body("charge").notEmpty(),
body("rating").notEmpty(),
body("license").notEmpty(),
body("services").notEmpty(),
body("longitude").notEmpty(),
body("latitude").notEmpty()
, savepandit);              
router.post("/activeList",activepanditList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active",activatepandit);
router.post("/removeById",removeById);
router.get("/premiumList",premiumList)


export default router;
