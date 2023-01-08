import React from "react";
import Nav from "./Nav";
import "../styles/globals.css";
import HomeSection from "./HomeSection";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/background.png')] h-[890px] bg-no-repeat bg-cover">
        <Nav />
        <HomeSection />
      </section>
    </div>
  );
}
