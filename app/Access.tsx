import React from "react";
import { BsCaretDown } from "react-icons/bs";
import Image from "next/image";
export default function Access() {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex justify-center  [&>a]:px-6 [&>a]:py-2 text-white bg-black rounded-full px-2 py-2">
          <a className="bg-white text-black rounded-full" href="#">
            Exclusive
          </a>
          <a href="#">Community</a>
          <a href="#">Feature</a>
          <a href="#">Games</a>
        </div>
      </div>
      <div className="absolute">
        <div className="relative left-[150%] top-[300px]">
          <h1 className="text-4xl font-semibold text-red-900">
            Access Game Instantly
          </h1>
          <p className="text-center relative left-[-10%] mt-10">
            With nearly 40,000 categories from AAA, indie to everything
            in-between.
            <br /> Enjoy exclusive deals, automatic game updates, and other
            great perks.
          </p>
          <a
            className="relative top-[50px] left-[25%] mt-32 font-semibold"
            href="#"
          >
            Brown Games
            <BsCaretDown className="-rotate-90 inline ml-2 text-xl" />
          </a>
        </div>
      </div>
      <Image
        className="relative left-[630px] top-[200px]"
        src="/img/the_entrophy.png"
        height="100"
        width="100"
        alt="img"
      />
      <Image
        className="relative left-[450px] top-[300px]"
        src="/img/alter.png"
        height="0"
        width="200"
        alt="img"
      />
      <Image
        className="relative left-[390px] top-[400px]"
        src="/img/pentiment.png"
        height="0"
        width="300"
        alt="img"
      />
      <Image
        className="relative left-[1100px] top-[280px]"
        src="/img/vikings.png"
        height="0"
        width="100"
        alt="img"
      />
      <Image
        className="relative left-[1270px] top-[100px]"
        src="/img/chained_echoes.png"
        height="0"
        width="200"
        alt="img"
      />
      <Image
        className="relative left-[1230px] top-[-300px]"
        src="/img/stacklands.png"
        height="0"
        width="300"
        alt="img"
      />
    </div>
  );
}
