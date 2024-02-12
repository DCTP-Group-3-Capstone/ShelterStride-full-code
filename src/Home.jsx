import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.scss";
import NavBar from "./components/NavBarSect/NavBar";
import Login from "./pages/Registeration/Login";
import SignUp from "./pages/Registeration/SignUp";
import SignUpBenefactor from "./pages/Registeration/SignUpBenefactor";
import CreateAccount from "./pages/Registeration/CreateAccount";
import Landing from "./pages/Landing/Home";
import Donate from "./pages/DonationPage/Donation";
import Rent from "./pages/RentPage/Rent";
import Gift from "./pages/Landing/components/GiftAHome/GiftAHome";
import BuyProduct from "./pages/Buyahomeproductpage/BuyAHomeProduct";
import RentProduct from "./pages/Rentahomeproductpage/RentAHomeProduct";
import Subscribe from "./pages/SubscribePage/Subscribe";
import Schedule from "./pages/ScheduleVisitPage/Schedule";
import ContactUs from "./pages/ContactUs/ContactUs";
import Buy from "./pages/BuyPage/Buy";
import ErrorPage from "./Error-page";
import Hidenavbar from "./components/Hidenavbar";
import Headroom from "react-headroom";

function Home() {
  return (
    <div>
      <Headroom>
        <Hidenavbar>
          <NavBar />
        </Hidenavbar>
      </Headroom>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/donate" element={<Donate />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/buyProduct" element={<BuyProduct />} />
        <Route path="/rentProduct" element={<RentProduct />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/scheduleVisit" element={<Schedule />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/signupbenefactor" element={<SignUpBenefactor />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Home;
