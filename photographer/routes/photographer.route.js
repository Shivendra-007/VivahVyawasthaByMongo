import express from "express";
import multer from "multer";

import { activatePhotographer, activePhotographerList, removeById, save, search, viewAll, viewById } from "../controller/photographer.controller.js";

const router = express.Router();
const uploads = multer({ dest: "public/Images/" });
router.post("/save", save),uploads.any("image");
router.post("/activeList",activePhotographerList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active",activatePhotographer);
router.post("/removeById",removeById);

export default router;
