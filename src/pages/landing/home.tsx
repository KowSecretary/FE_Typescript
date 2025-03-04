import SideBar from "../../components/menu/sideBar";
import Navbar from "../../components/menu/navBar";
import { Outlet } from "react-router-dom";
export default function home() {
  return (
    <div className="relative w-full">
      <div className="fixed left-0 top-0 right-0 z-10">
        <Navbar />
      </div>

      <div className=" ">
        <div className="fixed left-2 top-17">
          <SideBar />
        </div>
        <div className="ml-30 pt-[85px] pr-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
