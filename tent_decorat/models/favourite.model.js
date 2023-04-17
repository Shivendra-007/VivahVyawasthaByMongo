import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  customerId: {
    type: Number
   
  },
  Tent_DecoreId: {
    type: Number
    
  },
});

const Favourite = mongoose.model('favourite', favouriteSchema);

export default Favourite;
