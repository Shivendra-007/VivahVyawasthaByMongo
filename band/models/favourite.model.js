import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'bughi', // Referencing bughi collection
  },
  bughiId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'bughi', // Referencing bughi collection
  },
});

const Favourite = mongoose.model('favourite', favouriteSchema);

export default Favourite;
