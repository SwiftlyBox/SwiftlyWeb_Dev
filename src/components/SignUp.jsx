import React from "react";
import NavBar from "./NavBar";
import HeroSignUp from "./HeroSignUp";
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";
import RestuarantApplication from "./RestuarantApplication";
import HomeRestaurant from "./HomeRestuarant.jsx";

const Signup = () => {
  return (
    <>
      <NavBar />
      <HeroSignUp />
      <About/>
      <HomeRestaurant/>
      <RestuarantApplication/>
      <Footer />
    </>
  );
};
export default Signup;
