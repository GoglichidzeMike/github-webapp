import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const [lSValues, setLSValues] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  //creates local storage pair with an array of searches on SUBMIT CLICK.
  //also sets the state to the current values so we can use it.
  const handleClick = (e) => {
    const maxHistoryLength = 3;
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    const isHistoryMaxed = history.length === maxHistoryLength;
    const workingHistory = isHistoryMaxed ? history.slice(1) : history;
    const updatedHistory = workingHistory.concat(searchValue);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setLSValues(JSON.parse(localStorage.getItem("searchHistory") || "[]"));
    setSearchValue("");
  };

  //checks for local storage on initial load / reaload
  useEffect(() => {
    setLSValues(JSON.parse(localStorage.getItem("searchHistory") || "[]"));
  }, []);

  return (
    <div className="searchBar">
      <Link className="home-link" to={"/"}>
        <img className="home-icon" src="../img/home-icon.png" alt="home-icon" />
        <p>Home</p>
      </Link>

      <div className="search-container">
        <div className="search-input">
          <p className="search-label">User Search</p>
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            className="form-control"
            name="keyword"
            placeholder="User Name"
          />
          <Link to={`/${searchValue}`}>
            <button onClick={handleClick}>Search</button>
          </Link>
        </div>
        <div className="search-history">
          {lSValues[0] && (
            <p>
              {lSValues[0]} {lSValues[1]} {lSValues[2]}
            </p>
          )}
        </div>
      </div>

      <div className="title-wrapper">
        <p>Github Search</p>
        <p>Dev By Mikael</p>
      </div>
    </div>
  );
}

export default SearchBar;
