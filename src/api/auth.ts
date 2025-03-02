import axios from "axios";


const url: string = "http://localhost:3000";

// LOGIN
interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${url}/users/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

