import { useEffect, useState } from "react";
import userApi, { User } from "../../api/userApi";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userApi.getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách user:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
