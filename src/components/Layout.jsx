import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Block from "./Block"



const Layout = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Pricing />
      <Block />
      <Footer />
    </>
  );
};
export default Layout;