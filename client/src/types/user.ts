export type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type User = {
  __v: number;
  _id: string;
  bio : string ,
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  updatedAt: string;
}
