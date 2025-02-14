import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import  Footer  from "../components/Footer/Footer";
import { NotFound } from "../pages/NotFound";
import Navbar from "./NavBar/AppNavbar";
import ProductDetails from "./Product/Product";


function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh",margin:'0px 160px 0px 160px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product" element={<product/>}/>
        </Routes>
       </main>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

