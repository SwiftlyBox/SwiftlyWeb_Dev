import React from "react";
import NavBar from "./NavBar";
// import Hero from "./Hero";
// import About from "./About";
// import Pricing from "./Pricing";
import Footer from "./Footer";
import Block from "./Block";
import HeroAbout from "./HeroAbout";
import Why from "./Why";
import Founder from "./Founder"

const Layout = () => {
  return (
    <>
      <NavBar />
      <HeroAbout />
      <Why/>
      <Founder/>
      <Block/>
      <Footer/>
    </>
  );
};
export default Layout;
