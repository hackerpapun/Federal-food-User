import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home"; 
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {Profile} from "../pages/Profile";
import {Cart} from "../pages/Cart";
import {Checkout} from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Navbar from "../components/Navbar/AppNavbar";
import Footer from "../components/Footer/Footer";
import {NotFound} from "../pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

