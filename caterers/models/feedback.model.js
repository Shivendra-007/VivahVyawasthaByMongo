import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  customerId: {
    type: Number,
    required: true,
  },
 cateresId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key
    required: true,
    ref: 'Cateres', // Referencing Cateres collection
  },
  review: {
    type: String,
    required: true,
  },
});

const Feedback = mongoose.model('feedback', feedbackSchema);

export default Feedback;
