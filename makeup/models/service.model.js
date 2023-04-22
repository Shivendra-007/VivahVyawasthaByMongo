import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true
  },
  makeUpId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"makeup"
  }
});

const Service = mongoose.model('service', serviceSchema);

export default Service;
