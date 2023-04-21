import mongoose from "mongoose";

const requestSchema=new mongoose.Schema({
    contactPerson:{
           type:String,
           required:true,

    },
    contactNumber:{
         type:Number,
         required:true,
    },
    totalGuest:{
        type:Number,
        required:true
    },
    typeOfEvent:{
        type:String,
        required:true
    },
    dateFrom:{
        type:String,
        required:true
    },
    dateTo:{
        type:String,
        required:true
    },
    customerId:{
        type:Number,
        required:true
    },
    venueDetailsId:{
        type:mongoose.Schema. Types.ObjectId,
        ref:"VenueDetails"
    },

    

        
})

export const Request=mongoose.model("Request",requestSchema)