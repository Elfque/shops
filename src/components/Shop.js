import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./auth/Signin";
import SignUp from "./auth/Signup";
import Home from "./page/Home";
import StaffPicks from "./page/StaffPicks";
import AddShop from "./page/AddShop";
import ShopView from "./page/ShopsView";
import ShopView1 from "./page/ShopView1";
import Shops from "./page/Shops";
import Profile from "./layout/Profile";
import Settings from "./layout/Settings";
import Affiliate from "./layout/Affiliate";
import Billing from "./layout/Billing";
import AlertState from "../Context/AlertContext/AlertState";
import AuthState from "../Context/AuthContext/AuthState";

const Shop = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/staffpicks" element={<StaffPicks />} />
              <Route exact path="/addshop" element={<AddShop />} />
              <Route exact path="/shopview" element={<ShopView />} />
              <Route exact path="/shopview1" element={<ShopView1 />} />
              <Route exact path="/shops" element={<Shops />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/settings/profile" element={<Profile />} />
              <Route exact path="/settings/affiliate" element={<Affiliate />} />
              <Route exact path="/settings/billing" element={<Billing />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default Shop;
