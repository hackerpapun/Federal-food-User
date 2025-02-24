import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
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

    const getMargin = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        return { margin: "0px 200px" }; 
      } else if (width >= 768) {
        return { margin: "0px 100px" }; 
      } else {
        return { margin: "0px 50px" }; 
      }
    };

  return (
    <BrowserRouter>
      <NavbarMain />
      <main className="content-area" style={getMargin()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
