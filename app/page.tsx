import React from "react";
import Nav from "./Nav";
import "../styles/globals.css";
import HomeSection from "./HomeSection";
import Access from "./Access";
import CommunitySection from "./CommunitySection";
import Features from "./Features";
import PopularGames from "./PopularGames";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/background.png')] h-[890px] bg-no-repeat bg-cover">
        <Nav />
        <HomeSection />
      </section>
      <section className="bg-[url('/accessbg.svg')] mt-5 h-[890px] bg-no-repeat bg-center">
        <Access />
      </section>
      <section className=" bg-black h-[700px] ">
        <CommunitySection />
      </section>
      <section className=" h-[700px] ">
        <Features />
      </section>
      <section className=" h-[700px] ">
        <PopularGames />
      </section>
    </div>
  );
}
