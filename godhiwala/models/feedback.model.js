import mongoose from 'mongoose';

const feedbackSchema= new mongoose.Schema({
  feedback:{
    type:String,
    required:true
  },
   customerId:{
      type:String,
      required:true
   },
   bandId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"buggyDetails"
   }
})

export const Feedback=mongoose.model("feedback",feedbackSchema);
