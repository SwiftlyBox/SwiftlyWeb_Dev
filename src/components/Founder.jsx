import React from "react";
import Image from "next/image";
import turn from "../assets/turn.jpg";

const Founder = () => {
  return (
    <div
      name="home"
      className="w-full h-screen 	 bg-zinc-100 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold italic">
            Hear it from our founder.
          </h1>
          <p className="text-3xl py-6 text-black">
            I started this company because I wanted to help a huge mass of
            people to start their dreams without the worries of huge overheads.
          </p>
        </div>
        <div>
          <Image src={turn} alt="Founder" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Founder;
