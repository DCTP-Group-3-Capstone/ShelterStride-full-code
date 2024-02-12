import React, { useState } from "react";
import "./HeroBuy.scss";
import Buydata from "../../BuyData.json";
import ReactPaginate from "react-paginate";
import { Navigate } from "react-router-dom";

const InputBuy = () => {
  const [buyers, setBuyers] = useState(Buydata.slice(0, 36));
  const [wordentered, SetwordEntered] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [goToSubscribe, setGoTOSubscribe] = useState(false);
  const buyersPerPage = 9;
  const pagesVisited = pageNumber * buyersPerPage;
  if (goToSubscribe) {
    return <Navigate to="/buyProduct" />;
  }

  const handFilter = (event) => {
    const searchWord = event.target.value;
    SetwordEntered(searchWord);
    const filter = Buydata.filter((value) => {
      return value.address.toLowerCase().includes(searchWord.toLowerCase());
    });
    setBuyers(filter);
  };

  const displayBuyers = buyers
    .slice(pagesVisited, pagesVisited + buyersPerPage)
    .map((value) => {
      return (
        <div
          key={value.id}
          className="single-grid"
          onClick={() => setGoTOSubscribe(true)}
        >
          <img src={value.image} />
          <div className="flex">
            <h3>{value.pricing}</h3>
            <p>{value.cancelled}</p>
          </div>
          <p>{value.address}</p>
          <p>{value.description}</p>
        </div>
      );
    });

  const pageCount = Math.ceil(buyers.length / buyersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="wrapper">
      <div className="input-container">
        <div className="search">
          <input
            type="text"
            placeholder="Where would you prefer to live?"
            value={wordentered}
            onChange={handFilter}
          />
        </div>
        <select defaultValue="">
          <option value="hidden">Select price range</option>
          <option value="first option">#100,000</option>
          <option value="second option">#200,000</option>
          <option value="Third option">#300,000</option>
        </select>
        <select defaultValue="">
          <option value="hidden">Select </option>
          <option value="first option">1 plot</option>
          <option value="second option">2 plots</option>
          <option value="Third option">3 plots</option>
        </select>
        <select defaultValue="">
          <option value="hidden">Duration</option>
          <option value="first option">1 year</option>
          <option value="second option">2 years</option>
          <option value="Third option">3 years</option>
        </select>
        <button className="filter">Find Property</button>
      </div>
      <div className="grid-container">
        {" "}
        {displayBuyers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default InputBuy;
