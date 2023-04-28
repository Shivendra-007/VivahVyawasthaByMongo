import express from "express"
import { allList, activate, fetchById, removeById, save, activeList, topList } from "../controller/venueDetails.action.js";
import {body} from "express-validator";


const router=express.Router();

router.post("/save",
   body("title").notEmpty(),
   body("capacity").notEmpty(),
   body("address").notEmpty(),
   body("description").notEmpty(),
   body("charges").notEmpty(),
   body("rating").notEmpty(),
   body("license").notEmpty(),
   body("longitude").notEmpty(),
   body("latitude").notEmpty(),
   body("vendorId").notEmpty(),
save)
router.get("/fetchById/:id",fetchById)
router.get("/allList",allList)
router.post("/deactivate",removeById);
router.post("/activate",activate)
router.get("/activeList",activeList)
router.get("/topList",topList);
export default router;