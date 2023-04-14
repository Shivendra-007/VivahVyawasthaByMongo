import mongoose from "mongoose";
const makeupSchema = new mongoose.Schema({
    companyName: String,
    experience: String,
    address: String,
    thumbnail: String,
    description: String,
    price: Number,
    rating: Number,
    license: String,
    category: String,
    latitude: Number,
    longitude: Number,
    images: [],
    vendorId: Number
});

const Makeup = mongoose.model('makeup', makeupSchema);

export default Makeup;


