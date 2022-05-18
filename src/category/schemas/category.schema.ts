import { Schema } from 'mongoose';
export const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, required: false },
  },
  { _id: true },
);
