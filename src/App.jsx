import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./components/AppRouters.jsx";
// import ProfileAddressBar from "./pages/ProfileAddressBar.jsx";
// import Applycoupon from "./components/Applycoupon/Applycoupon";
import ProfileAddress from "./components/SettingProfile/ProfilePages/ProfileAddress/ProfileAddress";
// import Orderhistorydetails from "./components/SettingProfile/ProfilePages/ProfileOrder/Orderhistorydetails";
// import OrderTracking from "./components/SettingProfile/ProfilePages/ProfileOrder/Ordertracking";
// import Orderhistory from "./components/SettingProfile/ProfilePages/ProfileOrder/Orderhistory";

function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      {/* <ProfileAddressBar/> */}
      {/* <Applycoupon /> */}
      <ProfileAddress/>
      {/* <Orderhistorydetails/> */}
      {/* <OrderTracking/> */}
      {/* <Orderhistory/> */}
    </>
  );
}

export default App;
