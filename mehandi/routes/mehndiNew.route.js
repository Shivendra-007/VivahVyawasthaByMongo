import express from "express";
import { saveMultiple, viewAll, search, update, getMehndi } from "../controller/mehndiNew.controller.js";

const router = express.Router();

router.post("/save", saveMultiple); // http://localhost:8080/mehndisNew/save
router.get("/view", viewAll); // http://localhost:8080/mehndisNew/view
router.get("/search/:keyword", search); // http://localhost:8080/mehndisNew/search/mehndis one
router.post("/update/:id", update); // http://localhost:8080/mehndisNew/update/643a4c016ddaf1a2b1457d75
router.get("/findById/:id", getMehndi); // http://localhost:8080/mehndisNew/findById/643a4c016ddaf1a2b1457d75

export default router;
