/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../redux/action";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutAction());
  };
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link className="link" to="/findcountry">
              Simple Searcing
            </Link>
          </li>
          <li>
            <Link className="link" to="/advance">
              Search with selection
            </Link>
          </li>
        </ul>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
