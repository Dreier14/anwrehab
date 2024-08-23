import axios from "axios";

export const createApi = axios.create(
        {
            baseURL: import.meta.env.VITE_BASE_URL
        }
    )