import React from "react";
import { BsCaretDown } from "react-icons/bs";
import Image from "next/image";

export default function PopularGames() {
  return (
    <div className="flex justify-between px-40 py-20">
      <div>
        <h1 className="text-3xl font-bold">Popular Games</h1>
        <Image
          className="rounded-3xl mt-6"
          src={"/games_cover/valorant.png"}
          width="720"
          height="500"
          alt="valorant"
        />
      </div>
      <div>
        <h1 className="ml-96">
          View all
          <BsCaretDown className="-rotate-90 inline ml-2 text-xl" />
        </h1>
        <Image
          className="rounded-3xl mt-10"
          src={"/games_cover/stacklands.png"}
          width="495"
          height="300"
          alt="valorant"
        />
        <Image
          className="rounded-3xl mt-10"
          src={"/games_cover/helloNeighbor2.png"}
          width="495"
          height="300"
          alt="valorant"
        />
      </div>
    </div>
  );
}
