import axios, { AxiosInstance } from "axios";
import { getCookie } from "../utils";

export const ChefuriousServer: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/",
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});
