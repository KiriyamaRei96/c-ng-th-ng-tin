import axios from "axios";
export const token = process.env.NEXT_PUBLIC_X_TOKEN;

const callApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
 
  headers: { "x-token": token },
});
export default callApi;
export const api = process.env.DB_API;
