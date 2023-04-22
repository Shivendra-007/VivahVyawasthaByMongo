import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'mehndi', // Referencing mehndi collection
  },
  mehndiId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId type for foreign key

    ref: 'mehndi', // Referencing mehndi collection
  },
  review: {
    type: String,

  },
});

const Feedback = mongoose.model('feedback', feedbackSchema);

export default Feedback;
