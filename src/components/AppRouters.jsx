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
import ProductCard from "./ProductsItem/Product";

function AppRoutes() {
  return (
    // <Router>
    //   <AppNavbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/checkout" element={<Checkout />} />
    //     <Route path="*" element={<NotFound />} />{" "}
    //   </Routes>
    //   <Footer />
    // </Router>
    <>
      <ProductCard/>  
     {/* <AppNavbar/>  */}
    </>
  );
}

export default AppRoutes;
