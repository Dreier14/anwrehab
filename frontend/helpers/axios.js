import axios from "axios";

export const createApi = () => {
    console.log(import.meta.env.VITE_BASE_URL)
    return axios.create(
        {
            method: 'GET',
            baseUrl: import.meta.env.VITE_BASE_URL
        }
    )
}