import mongoose from "mongoose";
const panditSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
      },
    experience: {
        type: String,
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
    price:{
        type: String,
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
    longitude:{
        type: String,
        required: true,
      },
    images: [],
    
    service:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"service"
    },

    vendorId: {
        type: String,
        required: true,
      }
});

const Pandit = mongoose.model('pandit', panditSchema);

export default Pandit;


