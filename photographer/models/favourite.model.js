import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  customerId: {
    type: Number,
   required:true
  },
  photoGrapherId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'photographer',   
  },
});

const Favourite = mongoose.model('favourite', favouriteSchema);

export default Favourite;
