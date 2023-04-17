import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import panditjiRouter from "./routes/panditji.route.js";
import serviceRouter from "./routes/service.route.js"
import feedbackRouter from "./routes/feedback.route.js"
import favouriteRouter from "./routes/favourite.router.js"
import requestRouter from "./routes/request.router.js"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Dream:dreamepic@cluster0.ea17dov.mongodb.net/Panditji?retryWrites=true&w=majority")
    .then(result => {
        console.log("Database Connected....");
    })
    .catch(err => {
        console.log(err);
    });


app.use("/pandit", panditjiRouter);
app.use("/service", serviceRouter);
app.use("/feedback", feedbackRouter);
app.use("/favourite", favouriteRouter);
app.use("/request", requestRouter);

app.listen(9090, () => {
    console.log("Server Started");
})
