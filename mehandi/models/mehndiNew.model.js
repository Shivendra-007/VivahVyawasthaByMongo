import mongoose from "mongoose";
const mehndiSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    contactNumber: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    longitude: { type: String, required: true },
    experience: { type: String, required: true },

    thumbnail: { type: String },
    licence: { type: String },
    rating: { type: String },
    services: { type: [String], required: true },

    pricing: [{
        type: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true }
    }],
    images: [],
    availability: { type: String, required: true },
    website: { type: String, required: true },
    socialMedia: {
        facebook: { type: String },
        instagram: { type: String },
        twitter: { type: String }
    },
    vendorId: { type: Number, required: true },

});


const MehndiNew = mongoose.model('mehndinew', mehndiSchema);

export default MehndiNew;