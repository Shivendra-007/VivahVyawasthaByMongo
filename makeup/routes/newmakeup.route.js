import express from "express";
import { save,search,remove, viewAll,pricing } from "../controller/newmakeup.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/save",
body("CompanyName").notEmpty(),
body("experince").notEmpty(),
body("address").notEmpty(),
body("thumbnail").notEmpty(),
body("discription").notEmpty(),
body("charge").notEmpty(),
body("rating").notEmpty(),
body("license").notEmpty(),
body("category").notEmpty(),
body("longitude").notEmpty(),
body("latitude").notEmpty()
,save);
router.get("/view", viewAll);
router.post('/pricing',pricing)
router.get("/search/:keyword", search)//done and check
router.delete("/remove/:id", remove);//done and check...

export default router;
