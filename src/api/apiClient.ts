import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.example.com", // Thay bằng URL backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
