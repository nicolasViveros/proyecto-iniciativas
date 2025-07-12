import axios from "axios";

const instance = axios.create({
  baseURL: "https://rumboalaequidad.org/api",
  withCredentials: true,
});

export default instance;
