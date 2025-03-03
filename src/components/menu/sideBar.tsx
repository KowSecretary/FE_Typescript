import { HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    label: "home",
    icon: <HomeIcon className="h-6 w-6 text-gray-500" />,
    path: "/",
  },
  {
    id: 2,
    label: "profile",
    icon: <HomeIcon className="h-6 w-6 text-gray-500" />,
    path: "/about",
  },
  {
    id: 3,
    label: "settings",
    icon: <HomeIcon className="h-6 w-6 text-gray-500" />,
    path: "/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-2 py-4 items-center gap-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className="w-20 h-20 hover:bg-gray-100 bg-gray-200 rounded-2xl flex flex-col items-center justify-center"
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <p className="capitalize">{item.label}</p>
        </button>
      ))}
    </div>
  );
}
