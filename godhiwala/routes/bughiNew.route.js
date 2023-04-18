import express from "express";
import { saveMultiple, viewAll, search, update, getBughi } from "../controller/bughiNew.controller.js";

const router = express.Router();

router.post("/save", saveMultiple); // http://localhost:8080/bughiNew/save
router.get("/view", viewAll); // http://localhost:8080/bughiNew/view
router.get("/search/:keyword", search); // http://localhost:8080/bughiNew/search/bughi one
router.post("/update/:id", update); // http://localhost:8080/bughiNew/update/643a4c016ddaf1a2b1457d75
router.get("/findById/:id", getBughi); // http://localhost:8080/bughiNew/findById/643a4c016ddaf1a2b1457d75

export default router;
