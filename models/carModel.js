import {model, Schema} from 'mongoose';

const carSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
}, {timestamps: true});

export default model('Car', carSchema);