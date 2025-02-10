import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Footer } from "../components/Footer";
import { NotFound } from "../pages/NotFound";
import AppNavbar from "./NavBar/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Home} from "../pages/Home";
// import {Login} from "../pages/Login";
// import {Register} from "../pages/Register";
// import {Profile} from "../pages/Profile";
// import { Cart } from "../pages/Cart";
// import {Checkout} from "../pages/Checkout";
// import {Navbar} from "../components/Navbar";
// import {Footer} from "../components/Footer";
// import {NotFound} from "../pages/NotFound"; 

// function AppRoutes() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="*" element={<NotFound />} />{" "}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default AppRoutes;

import React from 'react'
import Footer from './Footer/Footer'

const AppRouters = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
    <div>
      <Footer/>
    </div>
  )
}

export default AppRouters
