import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </Link>
          <ul className="hidden md:flex">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/aboutus">
              <li>About</li>
            </Link>
            <Link href="/SignUp">
              <li>Partner With Us</li>
            </Link>
            <Link href="/driverapplication">
              <li>Become A Driver</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <Link href="/SignUp">
            <button className="border-none bg-transparent text-black mr-4">
              Partner With Us
            </button>
          </Link>
          <Link href="/driverapplication">
            <button className="px-8 py-3">Driver Up</button>
          </Link>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <Link href="/home">
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
        </Link>
        <Link href="/aboutus">
          <li className="border-b-2 border-zinc-300 w-full">About</li>
        </Link>
        <Link href="/SignUp">
          <li className="border-b-2 border-zinc-300 w-full">Partner With Us</li>
        </Link>
        <Link href="/driverapplication">
          <li className="border-b-2 border-zinc-300 w-full">Become A Driver</li>
        </Link>
        <div className="flex flex-col my-4">
          <Link href="/SignUp">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Partner With Us
            </button>
          </Link>
          <Link href="/driverapplication">
            <button className="px-8 py-3">Driver Sign Up</button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
