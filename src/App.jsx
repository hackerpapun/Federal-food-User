// import "./App.css";
// import ProductCard from "./components/Product/Product";
// import FaBottleDroplet from "./assets/5f04962e5082b.jpg";

// const productData = {
//   images: [
//     "./assets/bottle-side.jpg",
//     "./assets/bottle-top.jpg",
//     "./assets/bottle-bottom.jpg",
//   ],
//   image: FaBottleDroplet,
//   title: "Natural Mineral Water - 1L",
//   size: "1L Bottle",
//   mrp: 20,
//   price: 15,
//   discount: 25,
//   stockStatus: true,
//   seller: "Walmart",
//   description:
//     "This is a high-quality natural mineral water that keeps you hydrated.",
//   keyFeatures: [
//     "100% Natural",
//     "Rich in minerals",
//     "Promotes digestive health",
//   ],
//   disclaimer: "This is a sample product. Actual results may vary.",
// };

// function App() {
//   return <ProductCard product={productData} />;
// }

// export default App;
import React from 'react'
// import AppRoutes from './components/AppRouters'
// import ShopByCatagoriesCard from './components/ShopByCatagories/ShopByCatagoriesCard'
// import { Home } from './pages/Home'
// import Product from './components/Product/Product'
// import ProductSidebar from './components/ProductSidebar/ProductSidebar'
// import  Login  from './components/Login/Login'
import Registration from './components/Registration/Registration'
// import ProductCard from './components/ProductCard/ProductCard'

export const App = () => {
  return (
    <div>
      {/* <AppRoutes/> */}
      {/* <Home/> */}
      {/* <Product/> */}
      {/* <ProductSidebar /> */}
      {/* <ProductCard /> */}
      {/* <Login /> */}
      <Registration />
    </div>
  )
}
