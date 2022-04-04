import axios from "axios";

const api = axios.create({
  baseURL: "https://dummy-login.vercel.app",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default api;
