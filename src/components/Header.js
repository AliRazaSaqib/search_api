/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link className="link" to="/">
              Simple Searcing
            </Link>
          </li>
          <li>
            <Link className="link" to="/advance">
              Search with selection
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
