import { Schema } from 'mongoose';
export const ResourceSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    uploader: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, required: false },
  },
  { _id: true },
);
