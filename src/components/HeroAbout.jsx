import React from "react";
import Image from "next/image";
import okay from "../assets/okay.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen 	 bg-zinc-100 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold italic">
            About Us
          </h1>
        </div>
        <div>
          <Image src={okay} alt="/" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
