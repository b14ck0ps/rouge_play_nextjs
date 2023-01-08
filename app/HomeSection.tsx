import React from "react";
import Image from "next/image";
import { BsCaretDown } from "react-icons/bs";

export default function HomeSection() {
  return (
    <div className="flex justify-between">
      <div className="pl-40 mt-5">
        <h1 className="text-9xl font-semibold">Play,</h1>
        <h1 className="text-9xl font-bold text-strocked mt-4">Improve</h1>
        <h1 className="text-9xl font-semibold mt-4">& Win</h1>
        <p className="mt-5">
          RougePlay is the ultimate platform for <br />
          playing, discussing and creating game.
        </p>
        <div className="flex gap-16 mt-5">
          <div>
            <div className="flex">
              <p>Online</p>
              <div className="circle bg-blue-600"></div>
            </div>
            <h2 className="text-3xl font-bold">24,871,127</h2>
          </div>
          <div>
            <div className="flex">
              <p>PLaying Now</p>
              <div className="circle bg-green-400 ml-1"></div>
            </div>
            <h2 className="text-3xl font-bold">4,871,127</h2>
          </div>
        </div>
        <button className=" flex gap-2 items-center w-[180px] border-2 border-black rounded-2xl px-6 py-3 mt-5">
          <p className="font-semibold">Learn More</p>
          <BsCaretDown className="text-xl" />
        </button>
      </div>
      <Image className="p-5" src="/art.png" width={900} height={0} alt="art" />
    </div>
  );
}
