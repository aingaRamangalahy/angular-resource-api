export interface Resource {
  _id?: string;
  title?: string;
  description: string;
  thumbnail?: string;
  url: string;
  category: string;
  uploader?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
