import PaymentSect from "./components/PaymentSect";
import YourDonation from "./components/YourDonation";
import JoinUs from "./components/JoinUs";
import Footer from "../../components/FooterSect/Footer";
//style import
import "./donation.scss";

function DonationPage() {
  return (
    <div>
    <div className="donationPageWrapper">
      <PaymentSect />
      <YourDonation />
      <JoinUs />
   
    </div>
    <Footer/>
    </div>
   
  );
}

export default DonationPage;
