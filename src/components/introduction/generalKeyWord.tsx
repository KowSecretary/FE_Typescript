import { useEffect, useState } from "react";
import Avatar2 from "../../assets/avatar2.png";

const items: string[] = [
  "Ambition",
  "Diligence",
  "Perseverance",
  "Dedication",
  "Initiative ",
  "Aspiration",
  "Motivation",
  "Drive",
  "Endurance",
  "Fortitude",
  "Willpower",
  "Industriousness",
  "Curious",
];

export default function generalKeyWord() {
  const [randomWords, setRandomWords] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = items.sort(() => 0.5 - Math.random()).slice(0, 10);
    setRandomWords(shuffled);
  }, []); // Chạy 1 lần khi load trang

  return (
    <div className="flex flex-row justify-between py-20">
      <div className="w-[200px] pt-20 font-semibold flex flex-col items-end gap-10">
        <div className="rounded-3xl w-[200px] mr-[-260px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[3]}
        </div>
        <div className="rounded-3xl w-[200px] mr-[-200px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[4]}
        </div>
        <div className="rounded-3xl w-[200px] mr-[-150px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[5]}
        </div>
        <div className="rounded-3xl w-[200px] mr-[-150px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[6]}
        </div>
        <div className="rounded-3xl w-[200px] mr-[-200px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[5]}
        </div>
        <div className="rounded-3xl w-[200px] mr-[-260px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[5]}
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-36 left-7 rounded-full bg-amber-100 w-[400px] h-[400px] z-[-1]"></div>
        <div className="absolute top-36 left-0 rounded-full bg-amber-50 w-[450px] h-[450px] z-[-2]"></div>
        <img
          src={Avatar2}
          className="rounded-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 20%)",
          }}
        />
      </div>
      <div className="w-[200px] font-semibold pt-20 flex flex-col gap-10">
        <div className="rounded-3xl w-[200px] ml-[-260px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[0]}
        </div>
        <div className="rounded-3xl w-[200px] ml-[-200px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[1]}
        </div>
        <div className="rounded-3xl w-[200px] ml-[-150px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[2]}
        </div>
        <div className="rounded-3xl w-[200px] ml-[-150px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[0]}
        </div>
        <div className="rounded-3xl w-[200px] ml-[-200px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[1]}
        </div>
        <div className="rounded-3xl w-[200px] ml-[-260px] bg-[#FCE7C8] text-center px-10 py-3 shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] text-xl font-semibold">
          {randomWords[2]}
        </div>
      </div>
    </div>
  );
}
