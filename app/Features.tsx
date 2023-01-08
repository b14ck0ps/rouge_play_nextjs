import React from "react";
import { RiMic2Line } from "react-icons/ri";
import { RxFace } from "react-icons/rx";
import { BsCaretDown, BsWindow } from "react-icons/bs";
type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
};
export default function Features() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold m-5">Features</h1>
      <p className="text-center font-thin">
        We are constantly working to bring new updates and features
        <br /> to RougePlay, such as:
      </p>
      <div className="flex justify-center gap-28 mt-10">
        <Feature
          title={"Rouge Chat"}
          description={
            "Talk with friends or groups via text or voice without leaving Epic Games, Videos, Tweets, GIFs and more are supported; use wisely."
          }
          icon={<RiMic2Line size="30" />}
        />
        <Feature
          title={"Exclusive Game Access"}
          description={
            "Discover, play and get involve with game as they involve. Be the first to see what’s coming and becomes part of the history!"
          }
          icon={<RxFace size="30" />}
        />
        <Feature
          title={"Easy Purchases"}
          description={
            "Our unique trade system methods accross over 20+ state in US, giving you the flexibility to pay how you want."
          }
          icon={<BsWindow size="30" />}
        />
      </div>
      <h1 className="text-center font-bold text-3xl mt-16">
        And so much more...
      </h1>
      <p className="text-center mt-5">
        Earn achievements, read reviews, explore <br /> custom recommendations,
        and more.
      </p>
      <div className="flex justify-center mt-10">
        <button className="border-2 border-black rounded-xl px-5 py-3">
          Install RougePlay
          <BsCaretDown className="-rotate-90 inline ml-2 text-xl" />
        </button>
      </div>
    </div>
  );
}

export function Feature({ title, description, icon }: FeatureProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-red-900 p-7 rounded-3xl text-white mb-5 w-[90px]">
          {icon}
        </div>
        <h3 className="text-2xl fontsemi">{title}</h3>
        <p className="w-[320px] text-center mt-3">{description}</p>
      </div>
    </>
  );
}
