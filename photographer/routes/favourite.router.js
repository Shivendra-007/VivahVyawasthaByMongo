import express from "express";
import {  remove, viewAll, addFavourite } from "../controller/favourite.controller.js";
let router = express.Router();

router.post("/save", addFavourite);
router.post("/viewBycustomer", viewAll);
router.delete("/remove/:id", remove);


export default router;






