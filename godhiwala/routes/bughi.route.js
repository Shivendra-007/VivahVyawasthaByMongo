import express from "express";
import { activate, activeBuggyList, deactivatevenue, removeById, saveBuggy, search, viewAll, viewById } from "../controller/buggy.controller.js";
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
    , saveBuggy);
router.post("/activeList", activeBuggyList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active", activate)
router.post("/deactive", deactivatevenue);
router.post("/removeById", removeById);

export default router;
