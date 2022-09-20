
import React from "react";
import Image from "next/image";
import bgImg from "../assets/bgImg.jpg";
import Link from "next/link";






const DriverHero = () => {
  
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
         To Be A driver 
          </h1>
          <p className="text-2xl">Be your own boss</p>
        </div>
        <div>
          <Image src={bgImg} alt="/" width={600} height={500} />
        </div>
      </div>
    </div>
  );
};
export default DriverHero;