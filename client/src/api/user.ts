import { AxiosResponse, AxiosError } from "axios";
import { UserLogin, UserRegister } from "../types/user";
import { ChefuriousServer } from "./axios.config";


export const register = async (user: UserRegister): Promise<AxiosResponse | undefined> => {

  try {
    const response: AxiosResponse  = await ChefuriousServer.post("users/register", user);
    return response
  } catch (error) {
    return (error as AxiosError).response
  }

};

export const login = async (userCredentianls : UserLogin): Promise<AxiosResponse | undefined> => {
    try {
        const response: AxiosResponse  = await ChefuriousServer.post("users/login", userCredentianls);
        return response
      } catch (error) {
        return (error as AxiosError).response
      }
    
}

export const currentUser = async (): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse  = await ChefuriousServer.get("users/me");
    return response
  } catch (error) {
    return (error as AxiosError).response
  }
}
