import express from "express"
import { allList, activate, fetchById, removeById, save, activeList, topList, search } from "../controller/venueDetails.action.js";
import {body} from "express-validator";


const router=express.Router();

router.post("/save",
   body("title","title").notEmpty(),
   body("capacity").notEmpty(),
   body("address").notEmpty(),
   body("description").notEmpty(),
   body("charges").notEmpty(),
   body("rating").notEmpty(),
   body("license").notEmpty(),
   body("longitude").notEmpty(),
   body("latitude").notEmpty(),
   body("vendorId","vendorId unvalid").notEmpty(),
save)
router.get("/fetchById/:id",fetchById)
router.get("/allList",allList)
router.post("/deactivate",removeById);
router.post("/activate",activate)
router.get("/activeList",activeList)
router.get("/topList",topList);
router.get("/search/:keyword",search)
export default router;