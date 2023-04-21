import mongoose from "mongoose";

const vendorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
       type:Number,
       required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

});

export const Vendor = mongoose.model("vendor",vendorSchema);
