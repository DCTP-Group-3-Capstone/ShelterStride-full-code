import { useState } from "react";

import CardList from "../../../components/Cards/Card";
import CommitmentImg from "../img/commitmentimage.svg";
function Commitment() {
  const [cards, setCards] = useState([
    {
      image: CommitmentImg,
      alt: "property of a homeless person",
      title: "Our commitment",
      body: (
        <>
          ShelterStride is dedicated to transforming lives through affordable
          housing. We believe a secure home empowers individuals and strengthens
          communities. Explore our initiatives, reshaping the narrative of
          housing for a brighter, more inclusive future.
          <br />
          <br />
          Join us in reshaping the narrative of housing, where every story is a
          success story. Let's together unlock the doors to a brighter, more
          inclusive future.
        </>
      ),
      id: 1,
    },
  ]);
  return (
    <div className="commitment">
      <CardList cards={cards} />
    </div>
  );
}

export default Commitment;
