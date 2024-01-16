import { InferSchemaType } from 'mongoose';
import { BookAuthorSchema } from '../models/BookAuthor';

export type BookAuthorSchemaType = InferSchemaType<typeof BookAuthorSchema>;
