/** @format */
import React, { useState } from "react";
import "./style.css";
import axios from "../utils/axios";

const initialValues = {
  name: "",
  email: "",
};

const AddItems = (props) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("api/records/add", { ...values })
      .then((res) => setError(res?.data?.msg));
    handleReset();
  };

  const handleReset = () => {
    setValues(initialValues);
  };
  return (
    <>
      <div className="holdInputs">
        <button className="btn-close" onClick={() => props.setShow(false)}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="input"
            className="input"
            placeholder="Enter name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            className="input"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <label className="error_label">{error}</label>
      </div>
    </>
  );
};

export default AddItems;
