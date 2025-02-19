import React from "react";
import AppNavbar from "./AppNavbar";
import { ProductDropdown } from "../dropdown/ProductDropdown";

export const NavbarMain = () => {
  return (
    <>
      <div className="main-navbar"style={{}}>
        <AppNavbar />
        <ProductDropdown />
      </div>
    </>
  );
};
