import axios from "axios";
const token = process.env.DB_X_TOKEN;
const callApi = axios.create({
  baseURL: process.env.DB_API,
  timeout: 1000,
  headers: { "x-token": token },
});

const getHome = callApi(`v2/page/Home?locale=vi`)
  .then((res) => res.data)
  .catch((err) => console.error(err));
export default getHome;
