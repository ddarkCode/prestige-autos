import {model, Schema} from 'mongoose';

const carSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  price: {
    type: String,
    
  },
  imageUrl: {
    type: String,
    default: ''
  },
  imageFile: {
    type: Object,
    default: {
      data: String,
      contentType: String,
      filename: String
    }
  }
}, {timestamps: true});

export default model('Car', carSchema);