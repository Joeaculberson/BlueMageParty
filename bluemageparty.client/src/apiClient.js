import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'X-API-KEY': API_KEY,
    },
});

export default apiClient;