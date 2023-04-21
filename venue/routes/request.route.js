import express from "express";
import { add, byVenueId, confirm, remove } from "../controller/request.action.js";
import {body} from "express-validator";

const router =express.Router();

router.post("/add",
  body("contactPerson").notEmpty(),
  body("contactNumber").notEmpty(),
  body("totalGuest").notEmpty(),
  body("typeOfEvent").notEmpty(),
  body("dateFrom").notEmpty(),
  body("dateTo").notEmpty(),
  body("customerId").notEmpty(),

add);
router.post("/byVenueId",byVenueId);
router.post("/remove",remove);
router.post('/confirm',confirm);

export default router;