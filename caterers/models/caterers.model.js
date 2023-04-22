import mongoose from "mongoose";
const caterersSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    images: [],
    
    vendorId: {
        type: Number,
        required: true,
    }
});

const Caterers = mongoose.model('caterer', caterersSchema);

export default Caterers;


