import React from "react";
import Image from "next/image";
import { BsCart } from "react-icons/bs";

export default function Nav() {
  return (
    <div className="px-40 py-10">
      <nav className="flex justify-between items-center">
        <Image src="/logo.svg" width={150} height={0} alt="logo" />
        <div className="flex justify-between ">
          <ul className="flex items-center gap-10 font-medium">
            <li>
              {" "}
              <a href="/">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/store">Store</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/news">News</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/contact">Contact Us</a>{" "}
            </li>
            <li>
              <a href="/cart">
                <BsCart size="20px" />
              </a>
            </li>
          </ul>
          <button className="border-2 border-black rounded-full px-4 py-2 mx-10 font-semibold">
            Install Now
          </button>
        </div>
      </nav>
    </div>
  );
}
