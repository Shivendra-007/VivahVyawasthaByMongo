import mongoose from "mongoose";

const venueDetailsSchema=new mongoose.Schema({
    title:{
           type:String,
           required:true,

    },
    capacity:{
         type:Number,
         required:true,
    },
    address:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    charges:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    license:{
        type:String,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    images:{
      type:[]
      
    },
    vendorId:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'false'
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }

        
})

export const VenueDetails=mongoose.model("venueDetail",venueDetailsSchema)