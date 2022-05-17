import { Schema } from 'mongoose';
export const UserSchema = new Schema(
  {
    familyName: {
      type: String,
      trim: true,
    },
    givenName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email'],
    },
    emailVerified: Boolean,
    local: String,
    sub: String,
    password: {
      type: String,
      required: false,
      select: false,
      trim: true,
      minlength: [6, 'Please use 6 or more characters'],
    },
    role: {
      type: String,
      default: 'visitor',
    },
    connected: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, required: false },
  },
  { _id: true },
);
