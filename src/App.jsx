import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRouters.jsx";
// import ProfileAddressBar from "./pages/ProfileAddressBar.jsx";
import Applycoupon from "./components/Applycoupon/Applycoupon";

function App() {
  return (
    <>
      <AppRoutes />
      {/* <ProfileAddressBar/> */}
      {/* <Applycoupon /> */}
    </>
  );
}

export default App;
