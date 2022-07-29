import { Date } from "mongoose";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
};
