import DonateText from "../components/payment/DonateText";
import DonateOption from "./payment/DonateOption";
function PaymentSect() {
  return (
    <section className="paymentSect">
      <DonateText />
      <DonateOption />
    </section>
  );
}

export default PaymentSect;
