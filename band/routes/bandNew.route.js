import express from "express";
import { saveMultiple, viewAll, search, update, getBand } from "../controller/bandNew.controller.js";

const router = express.Router();

router.post("/save", saveMultiple); // http://localhost:8080/bandNew/save
router.get("/view", viewAll); // http://localhost:8080/bandNew/view
router.get("/search/:keyword", search); // http://localhost:8080/bandNew/search/band one
router.post("/update/:id", update); // http://localhost:8080/bandNew/update/643a4c016ddaf1a2b1457d75
router.get("/findById/:id", getBand); // http://localhost:8080/bandNew/findById/643a4c016ddaf1a2b1457d75

export default router;
