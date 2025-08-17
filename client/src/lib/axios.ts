// src/lib/axiosClient.ts
import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/v1", // 🔹 your backend API
  withCredentials: true, // allow sending cookies if backend sets them
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // 🔹 read JWT from cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor (optional)
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 🔹 Example: handle token expiration
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Token may be expired.");
      // Optionally redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
