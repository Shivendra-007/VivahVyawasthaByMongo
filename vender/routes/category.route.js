import express from "express";
import { body } from "express-validator";
import { list, removeById, save, update } from "../controller/category.action";

const router =express.Router();

router.post("/save",
 body("name").notEmpty(),
 body("contact").notEmpty(),
 body("email").notEmpty(),
 body("password").notEmpty(),
save);
router.get("/list",list);
router.post("/remove",removeById);
router.post("/update",update)


export default router
