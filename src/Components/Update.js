import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // jokhon amader page load hobe tokhon local storage jei data ase seigulo ekhane show
  // korte hobe

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpadte = (e) => {
    e.preventDefault();
    axios
      .put(`https://646f42e609ff19b12086e08b.mockapi.io/crudapi/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  const navigate = useNavigate();

  return (
    <div>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name </label>
          <input
            type="name"
            className="form-control"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => {
              setEmail(e.target.email);
            }}
            value={email}
          />
        </div>
        <div className="mb-2 form-check"></div>
        <Link to="/read">
          <button
            type="submit"
            className="btn btn-danger mb-2"
            style={{ marginLeft: "10px" }}
          >
            Back
          </button>
        </Link>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: "30px", marginBottom: "10px" }}
          onClick={handleUpadte}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
