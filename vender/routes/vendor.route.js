import express from "express"
import { signIn, signUp } from "../controller/venue.action";

const router =express.Router();

router.post("/singIn",signIn);
router.post("/signUp",
body("name","Name is required").notEmpty(),
body("email").isEmail(),
body("password").notEmpty(),
body("contact").notEmpty(),
body("contact").isNumeric(),
signUp);


export default router;