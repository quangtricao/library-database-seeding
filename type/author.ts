import { InferSchemaType } from 'mongoose';
import { AuthorSchema } from '../models/Author';
import { BookTitle } from './book';

export type AuthorSchemaType = InferSchemaType<typeof AuthorSchema>;
export type AuthorData = AuthorSchemaType & { books: BookTitle[] };
