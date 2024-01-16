import { InferSchemaType } from 'mongoose';
import { UserSchema } from '../models/User';

export type UserSchemaType = InferSchemaType<typeof UserSchema>;
