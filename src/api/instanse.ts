import axios, { AxiosError } from "axios";
import CookieStorageService from "../services/CookieStorageService";

export const instanse = axios.create({
  baseURL: "https://accelerist.herokuapp.com/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

instanse.interceptors.request.use(
  (config) => {
    const token = CookieStorageService.getToken();
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const apiAuth = axios.create({
  baseURL: "https://accelerist.herokuapp.com/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
