import axios from "axios";
export const token = process.env.DB_X_TOKEN;

const callApi = axios.create({
  baseURL: process.env.DB_API,
  timeout: 1000,
  headers: { "x-token": token },
});
export default callApi;
export const api = process.env.DB_API;
