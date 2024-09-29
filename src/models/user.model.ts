import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String }, // optional
  address: { type: String }, // optional
}, { timestamps: true });

export const User = model('User', UserSchema);
