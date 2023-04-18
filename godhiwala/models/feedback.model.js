import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'customer', // Referencing MakeupArtist collection
  },
  bughiId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'bughi', // Referencing MakeupArtist collection
  },
  review: {
    type: String,

  },
});

const Feedback = mongoose.model('feedback', feedbackSchema);

export default Feedback;
