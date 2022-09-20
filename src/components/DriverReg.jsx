import React from "react";
import NavBar from "./NavBar";
import DriverHero from "./DriverHero";
import Footer from "./Footer";
import RequirementsDriver from "./RequirementsDriver";
import Registration from "./Registration";
import loginD from "./loginD.jsx";
import DriverApplication from "./DriverApplication.jsx"


const DriverReg = () => {
  return (
    <>
      <NavBar />
      <DriverHero />
      <RequirementsDriver />
      <DriverApplication/>
      <Footer />
    </>
  );
};
export default DriverReg;