import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,

  },
});

const Service = mongoose.model('service', serviceSchema);

export default Service;
