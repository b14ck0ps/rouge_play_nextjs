import React from "react";
import { BsCaretDown } from "react-icons/bs";
import Image from "next/image";

export default function () {
  return (
    <div className="relative">
      <div className="bg-white w-[1400px] h-[500px] ml-[13%]  absolute my-[5%] rounded-3xl">
        <div className="flex justify-around mt-10 ">
          <div>
            <h1 className="border-b-2 border-gray-800 px-32 py-2">
              Join the community
            </h1>
            <h1 className="mt-32 text-3xl font-bold text-red-900">
              Meet new people
            </h1>
            <p className="mt-5">
              Join groups, form clans, chat in-game and more! With over <br />{" "}
              100 million potential friends (or enemies), the fun never stop.
            </p>
            <div className="mt-10">
              <a className="font-semibold" href="#">
                Visite the community
                <BsCaretDown className="-rotate-90 inline ml-2 text-xl" />
              </a>
            </div>
          </div>
          <div>
            <h1 className="border-b-0 border-gray-800 px-32 py-2 ">
              Experience Playo Hardware
            </h1>
            <Image
              className="mt-20"
              src="/communityImg.png"
              width={500}
              height={400}
              alt="comImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
