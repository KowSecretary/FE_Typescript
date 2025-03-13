import Ava from "../../assets/avatar.png";
import {
  DEGREE,
  EMAIL,
  FACEBOOK,
  GITHUB,
  LINKEDIN,
  NAME,
  PHONE,
} from "../../info";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function ProfileHeader() {
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
      <div className="h-[250px] bg-gradient-to-r from-gray-800 from-50% to-gray-400 to-100% text-white pl-10 flex flex-col py-5">
        <p className="font-semibold text-2xl">{DEGREE}</p>
        <div className="flex flex-row gap-4 py-10">
          <a href={FACEBOOK} target="_blank">
            <FaFacebookSquare className="text-3xl" />
          </a>
          <a href={GITHUB} target="_blank">
            <FaGithubSquare className="text-3xl" />
          </a>
          <a href={LINKEDIN} target="_blank">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
        <p className="text-xl inline-flex items-center gap-3">
          <FaPhoneVolume />
          {PHONE}
        </p>
        <p className="text-xl inline-flex items-center gap-3">
          <MdEmail />
          {EMAIL}
        </p>
      </div>
    </div>
  );
}
