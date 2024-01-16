import mongoose, { Schema } from 'mongoose';

export const BookGenreSchema = new Schema({
  bookId: {
    type: Schema.ObjectId,
    ref: 'Book',
    required: true,
  },
  genreId: {
    type: Schema.ObjectId,
    ref: 'Genre',
    required: true,
  },
});

// Compound index to ensure that book-genre pairs are unique.
BookGenreSchema.index({ bookId: 1, genreId: 1 }, { unique: true });

const BookGenre = mongoose.model('BookGenre', BookGenreSchema);
export default BookGenre;
