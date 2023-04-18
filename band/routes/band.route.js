import express from "express";
import { saveMultiple, search, remove, viewAll ,viewById} from "../controller/band.controller.js";

const router = express.Router();

router.post("/save", saveMultiple);
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)//done and check
router.delete("/remove/:id", remove);//done and check...

export default router;
