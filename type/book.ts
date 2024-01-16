import { InferSchemaType } from 'mongoose';
import { BookSchema } from '../models/Book.ts';

export type BookSchemaType = InferSchemaType<typeof BookSchema>;
export type BookTitle = {
  title: string;
};
