/** @format */

import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./style.css";
import AddItems from "./AddItems";
import editIcon from "../assets/edit.png";

const initialValues = {
  name: "",
  email: "",
};

function FindCountry() {
  const [name, setName] = useState("");
  const [apiData, setApiData] = useState();
  const [sample, setSample] = useState();
  const [show, setShow] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [edit, setEdit] = useState();

  // `https://jsonplaceholder.typicode.com/users`
  const fetchApiData = async () => {
    try {
      const { data } = await axios.get("api/records/getRecord");
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

  // delete

  const handleDelete = (id) => {
    axios
      .delete(`api/records/getRecord/${id}`)
      .then(() => {
        return axios.get("api/records/getRecord");
      })
      .then((res) => {
        const userInfo = res.data;
        setApiData(userInfo);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdate = (user) => {
    setPopUp(true);
    setEdit(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`api/records/updateRecord/${edit._id}`, values)
      .then((res) => {
        console.log("res", res);
        setPopUp(false);
        setValues(initialValues);
        return axios.get("api/records/getRecord");
      })
      .then((res) => {
        const userInfo = res.data;
        setApiData(userInfo);
      });
  };

  const handleClose = () => {
    setPopUp(false);
  };

  return (
    <>
      <div className="container">
        <h2>Search user information from api</h2>
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
              <li key={user._id} className="user">
                <span className="user-name">
                  <label>Name :</label> {user.name}
                </span>
                <span className="user-name">
                  <label>Email :</label> {user.email}
                </span>

                <div className="buttons_container">
                  <button
                    className="editInfo"
                    onClick={() => handleUpdate(user)}
                  >
                    <img src={editIcon} />
                  </button>

                  <button
                    className="btn-close"
                    onClick={() => handleDelete(user._id)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))
          ) : (
            <CircularProgress />
          )}
          {show ? <AddItems setShow={setShow} /> : null}
          <button onClick={() => setShow(true)}>Add more data</button>
        </div>
      </div>

      {popUp ? (
        <div id="overlay" className="overlay d-none">
          <div className="holdInputs updatePopup">
            <button className="btn-close" onClick={handleClose}>
              X
            </button>
            <form onSubmit={handleSubmit}>
              <input
                type="input"
                className="input"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
                value={values.name}
              />
              <input
                type="email"
                className="input"
                placeholder="Enter email"
                name="email"
                onChange={handleInputChange}
                value={values.email}
              />
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
            <label className="error_label"></label>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FindCountry;
