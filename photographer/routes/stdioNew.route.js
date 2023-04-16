import express from "express";
import { saveMultiple,viewAll,search,addService } from "../controller/stdioNew.controller.js";

const router = express.Router();

router.post("/save", saveMultiple);//http://localhost:8080/stdioNew/save
router.get("/view", viewAll);//http://localhost:8080/stdioNew/view
router.get("/search/:keyword", search)//http://localhost:8080/stdioNew/search/studio one
router.post("/add-service", addService); // http://localhost:8080/stdioNew/add-service

export default router;
