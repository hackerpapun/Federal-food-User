import { Routes, Route, useLocation } from "react-router-dom";
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
import "./Approutes.css";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <NavbarMain />
      <div className="content-area">
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
      </div>
      <Footer />
    </>
  );
}

export default AppRoutes;
