import express from "express";
import {  search,  viewAll ,viewById, savecaterer, activatecaterer, activecatererList, removeById} from "../controller/caterers.controller.js";
import { body } from "express-validator";
const router = express.Router();
const uploads = multer({ dest: "public/Images/" });
router.post("/save",
body("title").notEmpty(),
body("experince").notEmpty(),
body("address").notEmpty(),
body("thumbnail").notEmpty(),
body("discription").notEmpty(),
body("rating").notEmpty(),
body("license").notEmpty(),
body("services").notEmpty(),
body("longitude").notEmpty(),
body("latitude").notEmpty(),uploads.any("image"),savecaterer);              
router.post("/activeList",activecatererList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active",activatecaterer);
router.post("/removeById",removeById);


export default router;
