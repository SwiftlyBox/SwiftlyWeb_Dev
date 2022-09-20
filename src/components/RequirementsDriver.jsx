import React from "react";

const Requirements = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">These are the Requirements</h2>
          <p className="text-3xl py-6 text-black-200 items-center">
            <li>Must be at least 15 years old</li>
            <li>Must have a valid License</li>
            <li>Must hold a Bank Account</li>
            <li>Must submit a proof of identity.</li>
            <li>
              Must have either a car and a bike.At SwiftlyBox you {`don't`} need
              a motorbike you can deliver food with your bicycle.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
