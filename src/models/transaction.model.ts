import { Schema, model } from 'mongoose';

const TransactionSchema = new Schema({
  transactionId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, ref: 'User' },  // References the User collection
  bookId: { type: String, required: true, ref: 'Book' },  // References the Book collection
  issueDate: { type: Date, required: true },
  returnDate: { type: Date },  // Null until returned
  totalRent: { type: Number }, // Computed when returned
  status: { type: String, required: true, enum: ['issued', 'returned'], default: 'issued' }
}, { timestamps: true });

export const Transaction = model('Transaction', TransactionSchema);
