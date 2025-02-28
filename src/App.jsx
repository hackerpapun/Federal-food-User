import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRouters.jsx";
import Applycoupon from "./components/Applycoupon/Applycoupon";
import ProfileAddress from "./components/SettingProfile/ProfilePages/ProfileAddress/ProfileAddress.jsx";
import OrderSummery from "./components/AddtoCart/OrderSummery.jsx";
import Delete from "./components/Delete/Delete.jsx";
// import AddCart from "./components/AddtoCart/Addcart.jsx";

import Contactus from "./components/Contactus/Contactus.jsx";
// import ViewAll from "./components/ViewAll/ViewAll.jsx";
import SearchLocation from "./components/SearchLocation/SearchLocation.jsx"


function App() {
  return (
    <>
    {/* <AddCart/> */}
      {/* <AppRoutes /> */}
      {/* <ProfileAddressBar/> */}
      {/* <Applycoupon /> */}
      {/* <Contactus/> */}
      {/* <Delete /> */}
      {/* <ViewAll /> */}
      {/* <ProfileAddress/> */}
      <SearchLocation />
     
      
    </>
  );
}

export default App;
