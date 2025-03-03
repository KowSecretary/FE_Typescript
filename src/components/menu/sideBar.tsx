import { Button } from "@mantine/core";

export default function sideBar() {
  return (
    <div className="flex flex-col px-2 py-4 items-center gap-2">
      <button className="w-20 h-20 hover:bg-gray-100 bg-gray-200 rounded-2xl">
        Button 1
      </button>
      <button className="w-20 h-20 hover:bg-gray-100 bg-gray-200 rounded-2xl">
        Button 1
      </button>
      <button className="w-20 h-20 hover:bg-gray-100 bg-gray-200 rounded-2xl">
        Button 1
      </button>
    </div>
  );
}
