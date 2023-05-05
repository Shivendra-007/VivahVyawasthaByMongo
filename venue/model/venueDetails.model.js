import mongoose from "mongoose";

const venueDetailsSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    capacity: {
        type: Number,
        required:true
    },
    address: {
        type: String,
        required:true
        
    },
    contactNumber: {
        type: Number,
        required:true
        
    },
    thumbnail: {
        type: String,
        required:true
        
    },
    description: {
        type: String,
        required:true
        
    },
    charges: {
        type: Number,
        required:true
        
    },
    rating: {
        type: Number,
        required:true
        
    },
    license: {
        type: String,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    images: {
        type: []

    },
    vendorId: {
        type: String,
        
    },
    status: {
        type: String,
        default: 'false'
    },
    premium: {
        type: String,
        default: "false"
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    services: {
        type: []

    },
    catering: {
        NonvegPrice: { type: Number },
        VegPrice: { type: Number},
        Menueimage:{type:[]}
    },
    // facility:[] 
})

export const VenueDetails = mongoose.model("venueDetail", venueDetailsSchema)