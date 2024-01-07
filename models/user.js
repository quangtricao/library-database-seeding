import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    default: 'USER',
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
