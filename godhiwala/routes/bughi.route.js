import express from "express";
import { activateBuggy, activeBuggyList, removeById, saveBuggy, search, viewAll, viewById } from "../controller/buggy.controller";

const router = express.Router();

router.post("/save", saveBuggy);
router.post("/activeList",activeBuggyList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active",activateBuggy);
router.post("/removeById",removeById);

export default router;
