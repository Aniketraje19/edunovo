import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
  bookId: { type: String, required: true, unique: true },
  bookName: { type: String, required: true },
  category: { type: String, required: true },
  rentPerDay: { type: Number, required: true },
  author: { type: String }, // optional
}, { timestamps: true });

export const Book = model('Book', BookSchema);
