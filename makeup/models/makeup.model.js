import mongoose from "mongoose";
const makeupSchema = new mongoose.Schema({
    title: { type: String },
    address: { type: String },
    contactNumber: { type: String },
    longitude: { type: Number },
    latitude: { type: Number },
    experience: { type: String },
    thumbnail: { type: String },
    rating: { type: String },
    description: {
        type: String,
    
      },
    services: [{
        service: { type: String, required: true },
        price: { type: Number, required: true }
    }],
    images: [],
    vendorId: { type: Number },
    status:{
        type:String,
        required:true,
        default:'false'
    },

});

const Makeup = mongoose.model('makeup', makeupSchema);

export default Makeup;