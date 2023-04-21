import express from "express";
import { saveMultiple, viewAll, search, update, getStdio } from "../controller/stdioNew.controller.js";

const router = express.Router();

router.post("/save", saveMultiple); // http://localhost:8080/stdioNew/save
router.get("/view", viewAll); // http://localhost:8080/stdioNew/view
router.get("/search/:keyword", search); // http://localhost:8080/stdioNew/search/studio one
router.post("/update/:id", update); // http://localhost:8080/stdioNew/update/643a4c016ddaf1a2b1457d75
router.get("/findById/:id", getStdio); // http://localhost:8080/stdioNew/findById/643a4c016ddaf1a2b1457d75

export default router;
