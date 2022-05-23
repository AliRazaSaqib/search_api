/** @format */

import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./style.css";

const style = {
  styleSpinner: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "24%",
    margin: "auto",
  },
};

function FindCountryNewVersion() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam?.some((newItem) => {
          return (
            item[newItem]
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(q?.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam?.some((newItem) => {
          return (
            item[newItem]
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(q?.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return (
      <div>
        <CircularProgress style={style.styleSpinner} />
      </div>
    );
  } else {
    return (
      <div className="parent-warper">
        <div className="wrapper">
          <h2>Select value from dropdown and than Search data from api</h2>
          <div className="search-wrapper">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </label>

            <div className="select">
              <select
                onChange={(e) => {
                  setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Countries"
              >
                <option value="All">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
          <ul className="card-grid">
            {search(items).map((item) => (
              <li>
                <article className="card" key={item.capital}>
                  <div className="card-image">
                    <img src={item.coatOfArms.png} alt={item.name.common} />
                  </div>
                  <div className="card-content">
                    <h2 className="card-name">{item.name.common}</h2>
                    <ol className="card-list">
                      <li>
                        population: <span>{item.population}</span>
                      </li>
                      <li>
                        Region: <span>{item.region}</span>
                      </li>
                      <li>
                        Capital: <span>{item.capital}</span>
                      </li>
                    </ol>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default FindCountryNewVersion;
