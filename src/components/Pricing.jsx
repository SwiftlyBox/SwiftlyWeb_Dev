import React from "react";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h1>Think Different,Be Different,Act Different</h1>
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your Restaurant.
          </h3>
          <p className="text-3xl">Start Your Journey.</p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                25%
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /order
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Start Delivering Food to Your Customers.
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Start your Restaurant from your house.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Start selling your food to your customers.
              </p>
              <Link href="/SignUp">
                <button className="w-full py-4 my-4">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                35%
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /order
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Expand your restaurant to a new location.
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Expand your business to new communities.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Double your earnings .
              </p>
              <Link href="/SignUp">
                <button className="w-full py-4 my-4">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
