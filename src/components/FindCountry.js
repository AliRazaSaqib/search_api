/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./style.css";

function FindCountry() {
  const [name, setName] = useState("");
  const [apiData, setApiData] = useState();
  const [sample, setSample] = useState();

  const fetchApiData = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setApiData(data);
      setSample(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  const handleFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = apiData?.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setApiData(results);
    } else {
      setApiData(sample);
    }
    setName(keyword);
  };

  return (
    <>
      <div className="container">
        <h2>Search data from api</h2>
        <input
          type="search"
          value={name}
          onChange={handleFilter}
          className="input"
          placeholder="Filter"
        />

        <div className="user-list">
          {apiData?.length > 0 ? (
            apiData.map((user) => (
              <li key={user.id} className="user">
                <span className="user-name">{user.name}</span>
                <span className="user-name">{user.email}</span>
              </li>
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </>
  );
}

export default FindCountry;
