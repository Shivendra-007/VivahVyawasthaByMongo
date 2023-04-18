import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,

  },
  price: {
    type: Number,
    required: true,
  },
});

const Service = mongoose.model('service', serviceSchema);

export default Service;
