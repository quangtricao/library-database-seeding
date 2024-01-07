import BookAuthorModel from './models/bookauthor.js';
import BookGenreModel from './models/bookgenre.js';

export async function createBookAuthor(authorName, authorBooks, authorNamesAndIDs, bookTitlesAndIDs) {
  let author = authorNamesAndIDs.find((a) => a.name.toLowerCase() === authorName.toLowerCase());

  const newArr = authorBooks.map((bookName) => {
    let foundBook = bookTitlesAndIDs.find((a) => a.title.toLowerCase() === bookName.toLowerCase());
    return {
      authorId: author.id,
      bookId: foundBook.id,
    };
  });

  await BookAuthorModel.insertMany(newArr);
}

export async function createBookGenre(genreTitle, genreBooks, genreTitlesAndIDs, bookTitlesAndIDs) {
  let genre = genreTitlesAndIDs.find((a) => a.title.toLowerCase() === genreTitle.toLowerCase());

  const newArr = genreBooks.map((bookName) => {
    let foundBook = bookTitlesAndIDs.find((a) => a.title.toLowerCase() === bookName.toLowerCase());
    return {
      genreId: genre.id,
      bookId: foundBook.id,
    };
  });

  await BookGenreModel.insertMany(newArr);
}
