import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    index: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publishedYear: { type: Number, required: true },
  status: {
    type: String,
    enum: ['available', 'borrowed'],
    default: 'available',
  },
});

const BookModel = mongoose.model('Book', BookSchema);
export default BookModel;
