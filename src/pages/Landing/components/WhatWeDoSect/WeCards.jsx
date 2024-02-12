import { useState } from "react";
import CardList from "../../../../components/Cards/Card";
import arrow from "../../../../assets/icon/greenRight arrow.svg";

function WeCards() {
  const [cards, setCards] = useState([
    {
      title: "Our mission",
      body: "In the tapestry of our mission, we intertwine threads of compassion, resilience, and hope. We are committed to unlocking doors to safe, secure, and affordable homes for those who need it most.",
      id: 1,
    },
    {
      title: "What sets us apart?",
      body: "It’s our unwavering belief in the transformative power of a home. We don't just build structures; we craft narratives of empowerment. Each brick laid and each roof raised is a testament to the boundless potential within every individual we serve. ",
      btnTxt: "Learn more",
      btnImg: arrow,
      id: 2,
    },
    {
      title: "Community-driven ",
      body: "We are more than an organization; we are a community of change-makers, and advocates for a better tomorrow. Our approach is  about fostering a sense of belonging and unity.",
      btnTxt: "Learn more",
      btnImg: arrow,
      id: 3,
    },
    {
      title: "Join us on the journey.",
      body: "Whether you're a supporter or a partner, we invite you to join us on this transformative journey. Together, we can rewrite the narrative of affordable housing and create a world where everyone has the opportunity to thrive.",
      btnTxt: "Learn more",
      btnImg: arrow,
      id: 4,
    },
  ]);
  return (
    <div className="weCardsContainer">
      <CardList cards={cards} />
    </div>
  );
}

export default WeCards;
