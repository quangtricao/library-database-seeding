import { InferSchemaType } from 'mongoose';
import { GenreSchema } from '../models/Genre';
import { BookTitle } from './book';

export type GenreSchemaType = InferSchemaType<typeof GenreSchema>;
export type GenreData = GenreSchemaType & { books: BookTitle[] };
