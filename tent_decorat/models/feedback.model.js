import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  customerId: {
    type: Number,
    required: true,
  },
  Tent_DecoreId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key
    required: true,
    ref: 'tent', // Referencing TentDecore collection
  },
  review: {
    type: String,
    required: true,
  },
});

const Feedback = mongoose.model('feedback', feedbackSchema);

export default Feedback;