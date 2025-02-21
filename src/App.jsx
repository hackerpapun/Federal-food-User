import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./components/AppRouters.jsx";
// import ProfileAddressBar from "./pages/ProfileAddressBar.jsx";
import Applycoupon from "./components/Applycoupon/Applycoupon";
import OrderSummery from "./components/AddtoCart/OrderSummery.jsx";
import AddCart from "./components/AddtoCart/Addcart.jsx";
import AppRoutes from "./components/AppRouters.jsx";
function App() {
  return (
    <>
    {/* <AddCart/> */}
      <AppRoutes />
      {/* <ProfileAddressBar/> */}
      {/* <Applycoupon /> */}
      {/* <ProfileAddress/> */}
      {/* <Orderhistorydetails/> */}
      {/* <OrderTracking/> */}
      {/* <Orderhistory/> */}
    </>
  );
}

export default App;
