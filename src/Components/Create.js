import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const data = { name: "", email: "" };
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any of the fields are empty
    if (inputData.name.trim() === "" || inputData.email.trim() === "") {
      window.alert("Please fill in all fields.");

      return;
    }

    axios
      .post("https://646f42e609ff19b12086e08b.mockapi.io/crudapi", {
        name: inputData.name,
        email: inputData.email,
      })
      .then((res) => {
        navigate("/read");
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name </label>
          <input
            type="name"
            className="form-control"
            name="name"
            onChange={handleData}
            value={inputData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleData}
            value={inputData.email}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <Link to="/read">
          <button
            type="submit"
            className="btn btn-success"
            style={{ marginLeft: "30px", marginBottom: "0px" }}
          >
            See All Data
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
