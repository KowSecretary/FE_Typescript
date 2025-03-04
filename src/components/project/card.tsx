import { Rating } from "@mantine/core";

export default function card() {
  return (
    <div className="h-[300px] w-[300px] rounded-3xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300 delay-50 hover:-translate-y-4">
      <img src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" />
      <div className="px-6 pt-4 pb-2">
        <p className="text-[18px] font-semibold truncate">Name</p>
        <p className="truncate text-gray-500 py-3">Desscription</p>
        <Rating value={3.5} fractions={2} readOnly />
      </div>
    </div>
  );
}
