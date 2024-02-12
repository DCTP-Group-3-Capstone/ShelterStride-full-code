import React, { useState } from "react";
import "./InputRent.scss";
import Data from "../../Data.json";
import ReactPaginate from "react-paginate";
import { Navigate } from "react-router-dom";

const InputRent = () => {
  const [users, setUsers] = useState(Data.slice(0, 36));
  const [searchedWord, setSearchedWord] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [goToSubscribe, setGoTOSubscribe] = useState(false);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  if (goToSubscribe) {
    return <Navigate to="/rentProduct" />;
  }
  const handleFilter = (event) => {
    const word = event.target.value;
    setSearchedWord(word);
    const filter = Data.filter((value) => {
      return value.address.toLowerCase().includes(word.toLowerCase());
    });
    setUsers(filter);
  };

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
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

  const pageCount = Math.ceil(users.length / usersPerPage);

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
            value={searchedWord}
            onChange={handleFilter}
          />
        </div>
        <select defaultValue="">
          <option value="hidden">Select price range</option>
          <option value="first option">#30,000</option>
          <option value="second option">#40,000</option>
          <option value="Third option">#50,00</option>
        </select>
        <select defaultValue="">
          <option value="hidden">Type of space</option>
          <option value="first option">One bedroom flat</option>
          <option value="second option">Two bedroom flat</option>
          <option value="Third option">Three bedroom flat</option>
        </select>

        <select defaultValue="">
          <option value="hidden">Duration</option>
          <option value="first option">1 year</option>
          <option value="second option">2 years</option>
          <option value="Third option">3 years</option>
        </select>
        <select defaultValue="">
          <option value="hidden">Select Bedroom(s)</option>
          <option value="first option">one bedroom</option>
          <option value="second option">Two bedroom</option>
          <option value="Third option">Three Bedroom</option>
        </select>
        <button className="filter"> Apply Filter</button>
      </div>

      <div className="grid-container">
        {" "}
        {displayUsers}
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

export default InputRent;
