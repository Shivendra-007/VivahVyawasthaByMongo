import express from "express";
import {  search,  viewAll ,viewById, saveBand, activateBand, activeBandList, removeById} from "../controller/band.controller.js";

const router = express.Router();

router.post("/save", saveBand);
router.post("/activeList",activeBandList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active",activateBand);
router.post("/removeById",removeById);


export default router;
