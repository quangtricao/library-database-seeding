import 'dotenv/config';
import fs from 'fs/promises';
import mongoose from 'mongoose';

import AuthorModel from './models/author.js';
import BookModel from './models/book.js';
import BookAuthorModel from './models/bookauthor.js';
import BookGenreModel from './models/bookgenre.js';
import GenreModel from './models/genre.js';
// import UserModel from './models/user.js';

import { createBookAuthor, createBookGenre } from './helperFunctions.js';

mongoose.connect(process.env.DB_URL).then(() => console.log('connect database'));

await AuthorModel.deleteMany({});
await BookModel.deleteMany({});
await BookAuthorModel.deleteMany({});
await BookGenreModel.deleteMany({});
await GenreModel.deleteMany({});
// await UserModel.deleteMany({});

let books = await fs.readFile('./library-data/books.json', 'utf-8');
books = JSON.parse(books);
await BookModel.insertMany(books);

let authors = await fs.readFile('./library-data/authors.json', 'utf-8');
authors = JSON.parse(authors);
await AuthorModel.insertMany(authors);

let genres = await fs.readFile('./library-data/genres.json', 'utf-8');
genres = JSON.parse(genres);
await GenreModel.insertMany(genres);

let authorNamesAndIDs = [];
const authorNames = authors.map((a) => a.name);
for (const authorName of authorNames) {
  let response = await AuthorModel.findOne({ name: authorName });
  authorNamesAndIDs.push({ name: response.name, id: response._id });
  // ._id returns ObjectId (<value>)
  // .id returns a string type of <value>
}

let bookTitlesAndIDs = [];
const bookTitles = books.map((a) => a.title);
for (const bookTitle of bookTitles) {
  let response = await BookModel.findOne({ title: bookTitle });
  bookTitlesAndIDs.push({ title: response.title, id: response._id });
}

let genreTitlesAndIDs = [];
const genreTitles = genres.map((a) => a.title);
for (const genreTitle of genreTitles) {
  let response = await GenreModel.findOne({ title: genreTitle });
  genreTitlesAndIDs.push({ title: response.title, id: response._id });
}

const seedDB = async () => {
  let LeoTolstoyBooks = ['War and Peace', 'Family Happiness', 'How Much Land Does a Man Need?', 'Childhood'];
  await createBookAuthor('Leo Tolstoy', LeoTolstoyBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let JoanneRowlingBooks = [
    "Harry Potter and the Philosopher's Stone",
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows',
  ];
  await createBookAuthor('Joanne Rowling', JoanneRowlingBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let JeffKinneyBooks = ['Diary of a Wimpy Kid', 'Diary of a Wimpy Kid: Rodrick Rules'];
  await createBookAuthor('Jeff Kinney', JeffKinneyBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let WilliamShakespeareBooks = ['Hamlet', 'Romeo and Juliet', 'The Merchant of Venice'];
  await createBookAuthor('William Shakespeare', WilliamShakespeareBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let GeorgeOrwellBooks = ['Animal Farm'];
  await createBookAuthor('George Orwell', GeorgeOrwellBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let ErnestHemingwayBooks = ['The Old Man and the Sea'];
  await createBookAuthor('Ernest Hemingway', ErnestHemingwayBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let StephenKingBooks = ['The shining'];
  await createBookAuthor('Stephen King', StephenKingBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let MarkTwainBooks = ['The Mysterious Stranger', 'Life on the Mississippi'];
  await createBookAuthor('Mark Twain', MarkTwainBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let NicholasSparksBooks = ['The Best of Me', 'Dear John', 'A Walk to Remember'];
  await createBookAuthor('Nicholas Sparks', NicholasSparksBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let NikolaiOstrovskyBooks = ['How the Steel Was Tempered', 'Born of the Storm'];
  await createBookAuthor('Nikolai Ostrovsky', NikolaiOstrovskyBooks, authorNamesAndIDs, bookTitlesAndIDs);

  let NovelBooks = [
    'War and Peace',
    'The Old Man and the Sea',
    'The Mysterious Stranger',
    'How the Steel Was Tempered',
    'Born of the Storm',
  ];
  await createBookGenre('Novel', NovelBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let FictionBooks = [
    'Family Happiness',
    'How Much Land Does a Man Need?',
    'Childhood',
    'The Mysterious Stranger',
    'How the Steel Was Tempered',
    'Born of the Storm',
  ];
  await createBookGenre('Fiction', FictionBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let ActionBooks = [
    "Harry Potter and the Philosopher's Stone",
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows',
    'the shining',
    'Dear John',
    'A Walk to Remember',
  ];
  await createBookGenre('Action', ActionBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let DramaBooks = [
    "Harry Potter and the Philosopher's Stone",
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows',
    'Hamlet',
  ];
  await createBookGenre('Drama', DramaBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let AdventureBooks = [
    "Harry Potter and the Philosopher's Stone",
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows',
  ];
  await createBookGenre('Adventure', AdventureBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let ComedyBooks = ['Diary of a Wimpy Kid', 'Diary of a Wimpy Kid: Rodrick Rules', 'The Merchant of Venice'];
  await createBookGenre('Comedy', ComedyBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let TragedyBooks = ['Hamlet', 'Romeo and Juliet'];
  await createBookGenre('Tragedy', TragedyBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let SatireBooks = ['animal farm'];
  await createBookGenre('Satire', SatireBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let HorrorBooks = ['The shining'];
  await createBookGenre('Horror', HorrorBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let BiographyBooks = ['Life on the Mississippi'];
  await createBookGenre('Biography', BiographyBooks, genreTitlesAndIDs, bookTitlesAndIDs);

  let RomanceBooks = ['The Best of Me', 'Dear John', 'A Walk to Remember'];
  await createBookGenre('Romance', RomanceBooks, genreTitlesAndIDs, bookTitlesAndIDs);
};

seedDB().then(() => mongoose.connection.close());
