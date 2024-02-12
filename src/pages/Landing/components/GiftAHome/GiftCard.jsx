//card images import
import cardA from "../../img/giftAHome1.svg";
import cardB from "../../img/giftAHome2.svg";

//icon import
import arrow from "../../../../assets/icon/blueArrow.svg";
function GiftCard() {
  return (
    <div className="giftCardSection">
      <div className="giftCard">
        <div className="giftCardImg">
          <img
            src={cardA}
            alt="A bunch of keys beside a painted house on a table."
          />
        </div>
        <div className="giftTextBtn">
          <div className="cardText">
            <h4>Buy now, Pay later</h4>
            <p>
              Beyond the walls and roof, you're not just purchasing a property;
              you're investing in dreams, stability, and the promise of a secure
              tomorrow. Buy with the assurance that each property not only
              offers you comfort and security but also serves as a beacon of
              hope for those seeking the same.
            </p>
          </div>
          <div className="btnWrapper">
            <button>
              Buy a Home <img src={arrow} alt="arrow icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="giftCard">
        <div className="giftCardImg">
          <img src={cardB} alt="four red colored houses" />
        </div>
        <div className="giftTextBtn">
          <div className="cardText">
            <h4>Rent now, Pay later</h4>
            <p>
              Your monthly rent goes beyond just sustaining your living space;
              it becomes a lifeline for someone else. By choosing to rent with
              us, you contribute directly to creating a more inclusive and
              compassionate society.
            </p>
          </div>
          <div className="btnWrapper">
            <button>
              Rent a Home <img src={arrow} alt="arrow icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
