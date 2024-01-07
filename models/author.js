import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const authorSchema = new Schema({
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
    required: false,
  },
});

const AuthorModel = mongoose.model('Author', authorSchema);

export default AuthorModel;
