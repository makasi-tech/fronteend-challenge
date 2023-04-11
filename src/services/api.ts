//Axios imports
import axios from "axios";

const DEFAULT_API_TIMEOUT = 5000;

const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: DEFAULT_API_TIMEOUT,
});

export default api;
