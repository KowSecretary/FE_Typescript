import Ava from "../../assets/avatar.png";
import { DEGREE, EMAIL, NAME } from "../../info";

export default function about() {
  return (
    <div className="relative top-16">
      <div className="text-[34px] text-right mr-[260px] bg-transparent uppercase font-bold">
        {NAME}
      </div>

      <img src={Ava} className="h-96 absolute right-0 bottom-0 z-1" />
      <img
        src={Ava}
        className="h-96 absolute bottom-2 right-[-20px] filter grayscale brightness-40"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
      <div className="h-[250px] bg-gradient-to-r from-gray-800 from-50% to-gray-400 to-100% text-white pl-10 ">
        <p className="font-semibold text-2xl">{DEGREE}</p>
        <p className="text-xl inline-flex items-center gap-2">
          {/* <PhoneIcon className="h-4 w-4" /> */}
          {EMAIL}
        </p>
      </div>
    </div>
  );
}
