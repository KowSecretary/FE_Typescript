import apiClient from "./apiClient";

export interface User {
  id: number;
  name: string;
  email: string;
}

const userApi = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await apiClient.get("/users");
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  },
};

export default userApi;
