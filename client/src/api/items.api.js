import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const itemsApi = axios.create({
  baseURL: `${URL}/items/api/v1/items`,
});

export const getAllItems = () => itemsApi.get("/");

export const getItem = (id) => itemsApi.get(`/${id}`);

export const createItem = (item) => itemsApi.post("/", item);

export const updateItem = (id, item) => itemsApi.put(`/${id}/`, item);

export const deleteItem = (id) => itemsApi.delete(`/${id}`);
