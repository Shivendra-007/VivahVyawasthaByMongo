import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'mehndi', // Referencing mehndi collection
  },
  mehndiId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'mehndi', // Referencing mehndi collection
  },
});

const Favourite = mongoose.model('favourite', favouriteSchema);

export default Favourite;
