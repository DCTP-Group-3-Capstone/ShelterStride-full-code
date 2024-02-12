import { useState } from "react";
//card imports
import CardList from "../../../components/Cards/Card";

//image imports
import card1 from "../img/Donation1.svg";
import card2 from "../img/Donation2.svg";
function YourDonation() {
  const [cards, setCards] = useState([
    {
      image: card1,
      alt: "man and his wife showing us the key to his house",
      title: "Your Donation Help Brings a Smile to Families ",
      body: "The platform aims to match sponsors with individuals in need through an efficient algorithm while ensuring transparent fund utilization and fostering community engagement. Additionally, SHELTERSTRIDE seeks to establish legal and ethical compliance, build a sustainable ecosystem, and raise awareness about homelessness issues through effective marketing and outreach.",
      id: 1,
    },
    {
      image: card2,
      alt: "A beautifully arranged living room",
      title: "What sets us apart?",
      body: "It’s our unwavering belief in the transformative power of a home. We don't just build structures; we craft narratives of empowerment. Each brick laid and each roof raised is a testament to the boundless potential within every individual we serve.",
      id: 2,
    },
  ]);
  return (
    <section className="yourDonation">
      <CardList cards={cards} />
    </section>
  );
}

export default YourDonation;
