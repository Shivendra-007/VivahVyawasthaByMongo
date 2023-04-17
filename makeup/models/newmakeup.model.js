
import mongoose from "mongoose";
const newmakeupSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    services: {
        type: [String],
        required: true,
    },
    pricing: [{
        type: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true }
    }],
    images: [],
    
    availability:{type:String,required:true},

    website:{type:String,required:true},
    socialMedia:{
        facebook:{type:String},
        instagram:{type:String},
        twitter:{type:String}
    },
    vendorId:{type:Number,required:true}

});

const NewMakeup = mongoose.model('newmakeup', newmakeupSchema);

export default NewMakeup;


