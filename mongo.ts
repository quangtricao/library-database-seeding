import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import AuthorModel from './models/Author.ts';
import BookModel from './models/Book.ts';
import BookAuthorModel from './models/BookAuthor.ts';
import BookGenreModel from './models/BookGenre.ts';
import GenreModel from './models/Genre.ts';
import UserModel from './models/User.ts';

import { authors } from './data/authors.ts';
import { books } from './data/books.ts';
import { genres } from './data/genres.ts';
import { users } from './data/users.ts';

import { BookAuthorSchemaType } from './type/bookAuthor.ts';
import { BookGenreSchemaType } from './type/bookGenre.ts';
import { UserSchemaType } from './type/user.ts';

const { DB_URL } = process.env;
mongoose.connect(DB_URL as string).then(() => console.log('Database connected'));

await AuthorModel.deleteMany({});
await BookModel.deleteMany({});
await BookAuthorModel.deleteMany({});
await BookGenreModel.deleteMany({});
await GenreModel.deleteMany({});
await UserModel.deleteMany({});

await AuthorModel.insertMany(authors);
await BookModel.insertMany(books);
await GenreModel.insertMany(genres);

const bookAuthorIds: BookAuthorSchemaType[] = [];
BookAuthorLoop: for (const author of authors) {
  const authorResponse = await AuthorModel.findOne({ name: { $regex: author.name, $options: 'i' } });
  for (const book of author.books) {
    const bookResponse = await BookModel.findOne({ title: { $regex: book.title, $options: 'i' } });

    if (!authorResponse || !bookResponse) {
      console.log('There is an error in finding an author or a book for the BookAuthor bridge table');
      break BookAuthorLoop;
    }
    bookAuthorIds.push({ authorId: authorResponse._id, bookId: bookResponse._id });
  }
}

const bookGenreIds: BookGenreSchemaType[] = [];
BookGenreLoop: for (const genre of genres) {
  const genreResponse = await GenreModel.findOne({ title: { $regex: genre.title, $options: 'i' } });

  for (const book of genre.books) {
    const bookResponse = await BookModel.findOne({ title: { $regex: book.title, $options: 'i' } });

    if (!genreResponse || !bookResponse) {
      console.log('There is an error in finding a genre or a book for the BookGenre bridge table');
      break BookGenreLoop;
    }

    bookGenreIds.push({ genreId: genreResponse._id, bookId: bookResponse._id });
  }
}

const usersHashedPassword: UserSchemaType[] = [];
UserLoop: for (const user of users) {
  const SALT_ROUNDS = 12;
  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  usersHashedPassword.push({ ...user, password: hashedPassword });
}

await BookAuthorModel.insertMany(bookAuthorIds);
await BookGenreModel.insertMany(bookGenreIds);
await UserModel.insertMany(usersHashedPassword);

const adminAccount = await UserModel.findOne({ email: { $regex: 'admin', $options: 'i' } });
if (adminAccount) {
  const id = adminAccount.id;
  const userToBeUpdate: UserSchemaType = {
    image: adminAccount.image,
    password: adminAccount.password,
    firstName: adminAccount.firstName,
    lastName: adminAccount.lastName,
    email: adminAccount.email,
    role: 'ADMIN',
  };
  await UserModel.findByIdAndUpdate(id, userToBeUpdate);
} else {
  console.log('No ADMIN account found');
}

const seedDB = async () => {};
seedDB().then(() => mongoose.connection.close());
