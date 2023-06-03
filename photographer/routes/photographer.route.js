import express from "express";

import {  activate, activePhotographerList, deactivate, removeById, save, search, viewAll, viewById } from "../controller/photographer.controller.js";

const router = express.Router();

router.post("/save", save);
router.post("/activeList", activePhotographerList)
router.get("/view", viewAll);
router.get("/viewById/:id", viewById);
router.get("/search/:keyword", search)
router.post("/activate", activate)
router.post("/deactive", deactivate);
router.post("/removeById", removeById);

export default router;
