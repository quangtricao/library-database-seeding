import mongoose, { Schema } from 'mongoose';

export const BookAuthorSchema = new Schema({
  bookId: {
    type: Schema.ObjectId,
    ref: 'Book',
    required: true,
  },
  authorId: {
    type: Schema.ObjectId,
    ref: 'Author',
    required: true,
  },
});

// Compound index to ensure that author-book pairs are unique.
BookAuthorSchema.index({ bookId: 1, authorId: 1 }, { unique: true });

const BookAuthorModel = mongoose.model('BookAuthor', BookAuthorSchema);
export default BookAuthorModel;
