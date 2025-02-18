import React from "react";
import AppNavbar from "./AppNavbar";
import { ProductDropdown } from "../dropdown/ProductDropdown";
import { Router } from "react-router-dom";

export const NavbarMain = () => {
  return (
    <Router>
      <AppNavbar />
      <ProductDropdown />
    </Router>
  );
};
