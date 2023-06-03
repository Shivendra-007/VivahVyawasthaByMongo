import express from "express";
import { search, viewAll, viewById, savemehandi, activemehandiList, removeById, topList, activate, deactivate } from "../controller/mehandi.controller.js";
import { body } from "express-validator";
const router = express.Router();

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
    body("latitude").notEmpty()
    , savemehandi);
router.post("/activeList", activemehandiList)
router.get("/view", viewAll);
router.get("/topList", topList);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/activate", activate)
router.post("/deactive", deactivate);
router.post("/removeById", removeById);


export default router;
