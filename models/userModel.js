import {model, Schema} from 'mongoose';
import {hash, compare} from 'bcrypt';
import findOrCreate from 'mongoose-findorcreate';

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: 'client'
  },
  address: {
    type: String,
    default: ''
  },
  mobile: {
    type: String,
    default: ''
  },
  googleId: String
})

userSchema.plugin(findOrCreate);

userSchema.methods.verifyPassword = async function(password,hashedPassword) {
  return await compare(password, hashedPassword);
}

export default model('User', userSchema);