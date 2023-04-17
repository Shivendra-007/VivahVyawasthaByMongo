import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  customerId: {
    type: Number

  },
  panditId: {
    type: Number

  },
});

const Favourite = mongoose.model('favourite', favouriteSchema);

export default Favourite;
