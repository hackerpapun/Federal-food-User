import "./App.css";

import AppRoutes from "./components/AppRouters";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import SubByCategories from "./components/ShopByCategories/ShopByCategories.jsx";
function App() {
  return (
    <>
      <AppRoutes />
      {/* <CategoryPage/> */}
      {/* <SubByCategories /> */}
    </>
  );
}

export default App;
