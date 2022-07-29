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
}
