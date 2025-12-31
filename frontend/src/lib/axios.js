import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://mern-think-board-backend11111.vercel.app/api";
const api = axios.create({
    baseURL: BASE_URL,
})

export default api;