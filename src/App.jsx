// import { BrowserRouter as Router } from "react-router-dom";
// // import AppRoutes from "./components/AppRouters.jsx";
// // import Applycoupon from "./components/Applycoupon/Applycoupon";
// // import ProfileAddress from "./components/SettingProfile/ProfilePages/ProfileAddress/ProfileAddress.jsx";
// // import OrderSummery from "./components/AddtoCart/OrderSummery.jsx";
// // import AddCart from "./components/AddtoCart/Addcart.jsx";
// // import Orderhistory from "./components/SettingProfile/ProfilePages/ProfileOrder/Orderhistory.jsx";
// // import Orderhistorydetails from "./components/SettingProfile/ProfilePages/ProfileOrder/Orderhistorydetails.jsx";
// // import Payment from "./components/AddtoCart/Payment.jsx";
// // import PaymentPage from "./components/AddtoCart/PaymentPage.jsx";
// // import ConfirmOrder from "./components/confirmOrder/ConfirmOrder.jsx";
// import ChatModal from "./components/SettingProfile/ProfileChat/ChatModal.jsx";

// function App() {
//   return (
//     <>
//     {/* <AddCart/> */}
//       {/* <AppRoutes /> */}
//       {/* <ProfileAddressBar/> */}
//       {/* <Applycoupon /> */}
//       {/* <ProfileAddress/> */}
//       {/* <Orderhistorydetails/> */}
//       {/* <OrderTracking/> */}
//       {/* <Orderhistory/> */}
//       {/* <ConfirmOrder/> */}
//       <ChatModal/>
//     </>
//   );
// }

// export default App;



import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRouters"
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
