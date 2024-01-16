import mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const AuthorModel = mongoose.model('Author', AuthorSchema);
export default AuthorModel;
