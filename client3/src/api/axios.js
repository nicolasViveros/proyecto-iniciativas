import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:4000/api",
  // baseURL: "https://rumboalaequidad.org:4000/api",
  withCredentials: true,
});

export default instance;
