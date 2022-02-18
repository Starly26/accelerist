import axios, { AxiosError } from "axios";
import LocalStorageService from "../services/LocalStorageService";

export const instanse = axios.create({
  baseURL: "https://accelerist.herokuapp.com/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

// instanse.interceptors.request.use(async (config) => {
//   const token = await LocalStorageService.getToken();
//   if (!config.headers) {
//     config.headers = {};
//   }
//   config.headers.Authorization = `Bearer ${token}`;

//   return config;
// }),
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   };

instanse.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getToken();
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
