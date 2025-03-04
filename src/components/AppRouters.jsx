import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../pages/Home";
import Login from "../components/Login/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import Footer from "../components/Footer/Footer";
import { NotFound } from "../pages/NotFound";
import { NavbarMain } from "./NavBar/NavbarMain";
import ProductDetails from "./Product/Product";
import CategoryPage from "./CategoryPage/CategoryPage";
import PaymentPage from "./AddtoCart/PaymentPage";
import ConfirmOrder from "./confirmOrder/ConfirmOrder";
import Contactus from "./Contactus/Contactus";

function AppRoutes() {
  const location = useLocation();
  const [margin, setMargin] = useState(getInitialMargin());

  function getInitialMargin() {
    const width = window.innerWidth;
    return width >= 1200
      ? { margin: "10px 200px" }
      : width >= 768
      ? { margin: "30px 100px" }
      : { margin: "10px 50px" };
  }

  useEffect(() => {
    const handleResize = () => {
      setMargin(getInitialMargin());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavbarMain />
      <main className="content-area" style={margin}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default AppRoutes;
