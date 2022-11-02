import axios from "axios";
const token = process.env.DB_X_TOKEN;
const callApi = axios.create({
  baseURL: process.env.DB_API,
  timeout: 1000,
  headers: { "x-token": token },
});
export default callApi;
