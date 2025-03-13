// IMPORT ICON
import { IoIosCalendar } from "react-icons/io";
import { FaRegUser, FaRegHeart, FaCode } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineLocationOn } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiReadCvLogo } from "react-icons/pi";
import { GrScorecard } from "react-icons/gr";
import Quote from "./quote";

// Dữ liệu chung cho profile
const profileData = [
  { icon: IoIosCalendar, label: "Date of Birth", value: "04/07/2002" },
  { icon: FaRegUser, label: "Gender", value: "Male" },
  { icon: MdOutlineSchool, label: "Graduated", value: "FPT University" },
  { icon: MdOutlineLocationOn, label: "Location", value: "Ho Chi Minh City" },
  { icon: FaCode, label: "Coding", value: "Front Developer" },
  { icon: LuBriefcaseBusiness, label: "Job", value: "Business Analyst" },
  { icon: FaRegHeart, label: "Habit", value: "Sport & Learning" },
  { icon: PiReadCvLogo, label: "GPA", value: "3.3" },
  { icon: GrScorecard, label: "Ielts", value: "6.0" },
  { icon: FaRegHeart, label: "Bias", value: "Kow" },
  { icon: PiReadCvLogo, label: "Resume", value: "Available" },
  { icon: GrScorecard, label: "Certificate", value: "6.0" },
];

export default function GeneralProfile() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center pr-24">
        <div className="pt-7">
          {profileData.slice(0, 3).map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-2">
              <item.icon className="text-xl" />
              <span className="font-medium">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="pt-7">
          {profileData.slice(3, 6).map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-2">
              <item.icon className="text-xl" />
              <span className="font-medium">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="pt-7">
          {profileData.slice(6, 9).map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-2">
              <item.icon className="text-xl" />
              <span className="font-medium">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="pt-7">
          {profileData.slice(9, 12).map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-2">
              <item.icon className="text-xl" />
              <span className="font-medium">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
