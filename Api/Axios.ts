import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;
export  const token = process.env.NEXT_PUBLIC_X_TOKEN;
const callApi = axios.create({
  baseURL: api,
 
  headers: { "x-token": token },
});
export default callApi;

