import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="w-full mt-24 bg-zinc-200 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8  text-black">
        <div>
          <h6 className="font-bold uppercase pt-2  text-black ">Partner With Us</h6>
          <ul>
    <Link href="/driverapplication"><li className="py-1  text-black ">Become A driver</li></Link>
            <Link href="/SignUp"><li className="py-1  text-black ">Partner With Us</li></Link>
             <Link href="/aboutus"><li className="py-1  text-black ">About Us</li></Link>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2" text-black>
            SwiftlyBox
          </h6>
          <ul>
            <Link href="/aboutus">
              <li className="py-1" text-black>
                About
              </li>
            </Link>
            <Link href="https://zcal.co/i/jhRKjlSf">
              <li className="py-1" text-black>
                Investor Relation
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2" text-black>
            Legal
          </h6>
          <ul>
            <Link href="/Privacy">
              <li className="py-1" text-black>
                Privacy
              </li>
            </Link>
            <Link href="/Conditions">
              <li className="py-1"> Terms & Conditions</li>
            </Link>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className=" text-black ">support@swiftlybox.com</p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4  text-black ">
          2022 SwiftlyBox  @ All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl  text-black ">
          <Link href="https://www.instagram.com/swiftlybox/?hl=en">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/company/swiftlybox/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
