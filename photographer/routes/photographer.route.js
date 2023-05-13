import express from "express";

import { activatePhotographer, activePhotographerList, deactivatevenue, removeById, save, search, viewAll, viewById } from "../controller/photographer.controller.js";

const router = express.Router();

router.post("/save", save);
router.post("/activeList", activePhotographerList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/active", activatePhotographer);
router.post("/deactive", deactivatevenue);
router.post("/removeById", removeById);

export default router;
