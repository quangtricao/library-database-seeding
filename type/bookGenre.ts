import { InferSchemaType } from 'mongoose';
import { BookGenreSchema } from '../models/BookGenre';

export type BookGenreSchemaType = InferSchemaType<typeof BookGenreSchema>;
