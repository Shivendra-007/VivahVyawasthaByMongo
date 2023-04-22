import express from "express";
import { addFavourite, byCustomerId } from "../controller/favourite.action.js";

const router=express.Router();

router.post("/addFavourite",addFavourite)
router.get("/byCustomerId/:customerId",byCustomerId)

export default router