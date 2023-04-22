import mongoose from "mongoose";

const feedbackSchema= new mongoose.Schema({
    feedback:{
      type:String,
      required:true
    },
     customerId:{
        type:String,
        required:true
     },
     venueId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"venueDetail"
     }
})

export const Feedback=mongoose.model("feedback",feedbackSchema);