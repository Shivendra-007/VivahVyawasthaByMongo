import mongoose from "mongoose";

const favouriteSchema= new mongoose.Schema({
     customerId:{
        type:String,
        required:true
     },
     makeupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"makeup"
     }
})
const Favourite=mongoose.model("favourite",favouriteSchema);

export default Favourite;