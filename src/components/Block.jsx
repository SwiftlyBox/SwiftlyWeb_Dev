import React from "react";
import Link from "next/link";
import { MdPeopleOutline, MdOutlineBikeScooter } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

const Block = () => {
  return (
    <div className=" md:flex pr-4 ">
      <Link href="/aboutus">
        <button
          className=" border-black		bg-zinc-100	"
          style={{
            padding: 20,
            color: "black",
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          <MdPeopleOutline size={30} color={"black"} />
          <h3 className="font-bold uppercase pt-2 text-stone-500	 text-left">
            About Us
          </h3>
          <p className="text-3xl py-6 text-stone-500	 text-left">
            Find out the reason why we started our company.Read a letter from
            our founder ,who built this company for you.Hear it from the horses
            mouth.
          </p>
        </button>
      </Link>
      <Link href="/driverapplication">
        <button
          className=" border-black		bg-zinc-100	"
          style={{
            padding: 20,
            color: "black",
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          <MdOutlineBikeScooter size={30} color={"black"} />
          <h3 className="font-bold uppercase pt-2 text-stone-500	 text-left">
            Become A Driver
          </h3>
          <p className="text-3xl py-6 text-stone-500	 text-left">
            {"You'll"} be able drive and make as much as you need. And, the more
            you drive, the more you may make. Additionally, your admissions get
            consequently kept week after week.
          </p>
        </button>
      </Link>
      <Link href="/SignUp">
        <button
          className=" border-black		bg-zinc-100	"
          style={{
            padding: 20,
            color: "black",
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          <TbChecklist size={30} color={"black"} />
          <h3 className="font-bold uppercase pt-2 text-stone-500	 text-left">
            More information
          </h3>
          <p className="text-3xl py-6 text-stone-500	 text-left">
            Learn more about how to open a virtual restaurant at from the
            comfort of your own home and also how you can expand your existing
            restaurant to nearby communities.
          </p>
        </button>
      </Link>
    </div>
  );
};
export default Block;
