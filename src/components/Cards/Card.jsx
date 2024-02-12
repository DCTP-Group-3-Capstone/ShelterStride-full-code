const CardList = ({ cards }) => {
  return (
    <div className="cardBox">
      {cards.map((card) => (
        <div key={card.id} className="cardContent">
          <div className="cardImage">
            <img src={card.image} alt={card.alt} />
          </div>
          <div className="cardText">
            <h4>{card.title}</h4>
            <p>{card.body}</p>
          </div>
          <div className="cardBtnWrapper">
            <button>
              {card.btnTxt} <img src={card.btnImg} alt="button icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
