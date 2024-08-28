import axios, { AxiosInstance } from "axios";

export const createApi: AxiosInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_URL
    }
);