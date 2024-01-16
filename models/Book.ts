import mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
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
    required: false,
  },
});

const BookModel = mongoose.model('Book', BookSchema);
export default BookModel;
