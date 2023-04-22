import mongoose from "mongoose";
const mehndiSchema = new mongoose.Schema({
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
    // { ref: vendorId }
});

const Mehndi = mongoose.model('mehndi', mehndiSchema);

export default Mehndi;




// let cakeSchema = new Schema(
//     {
//         companyName: {
//             type: String,
//             default: ""
//         },
//         description: {
//             type: Object,
//             default: {}
//         },
//         sizeAndPrice: {
//             type: Object,
//             default: {}
//         },
//         flavour: {
//             type: Array,
//             default: []
//         },
//         images: {
//             type: Array,
//             default: [],
//         },
//         totalOrders: {
//             type: Number,
//             default: 0
//         },
//         totalNoOfReviews: {
//             type: Number,
//             default: 0
//         },
//         sumOfReviews: {
//             type: Number,
//             default: 0
//         },
//         tags: {
//             type: Array,
//             default: [],
//         },
//         createdAt: {
//             type: Date,
//             default: new Date()
//         }
//     },
//     { timestamps: true }
// );
