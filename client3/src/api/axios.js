import axios from "axios";

const instance = axios.create({
  baseURL: "http://62.171.132.171:4000/api",
  withCredentials: false,
});

export default instance;
