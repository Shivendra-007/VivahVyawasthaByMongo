import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
// import nodemailer from "nodemailer";
// import emailjs from "emailjs-com";
// import cors from "cors";
import CustomerRouter from "./routes/customer.route.js"

const app = express();

mongoose.connect("mongodb://127.0.0.1/vivaah")
    .then(result => {
        // app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use("/customer", CustomerRouter);
        app.listen(3000, () => {
            console.log("databases....");
            console.log("server started....");
        });
    })
    .catch(err => {
        console.log("Database is not connected");
        console.log(err);
    })


    