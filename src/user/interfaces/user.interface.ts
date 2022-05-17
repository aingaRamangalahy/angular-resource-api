export interface User {
  _id?: string;
  sub?: string;
  givenName?: string;
  familyName?: string;
  email: string;
  emailVerified?: boolean;
  local?: string;
  password: string;
  role: string;
  connected?: boolean;
  resetPasswordToken?: string;
  resetPasswordExpire?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
