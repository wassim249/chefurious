import React, { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../types/user";

interface UserContextProps {
    user: User | null;
    setUser:Dispatch< SetStateAction<User | null>>;}

export const UserCtx: React.Context<UserContextProps | null> = createContext<UserContextProps| null>(
  null
);
