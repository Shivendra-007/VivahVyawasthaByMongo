import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: Number,
    required: true
  },
  totalGeust: {
    type: Number,
    required: true
  },
  customerId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Customer',
    type:Number,
    required: true
  },
  cateresId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Cateres',
    type:Number,
    required: true
  },
  requestDate: {
    type: Date,
    default: Date.now
  }
});

const Request = mongoose.model('request', requestSchema);

export default Request;
