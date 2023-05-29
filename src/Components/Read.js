import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  const getData = () => {
    axios
      .get("https://646f42e609ff19b12086e08b.mockapi.io/crudapi")
      .then((res) => {
        setData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://646f42e609ff19b12086e08b.mockapi.io/crudapi/${id}`)
      .then(() => {
        getData(); // er mane hocche delete korar por ei function call kore dao
      });
  };

  const handleStorage = (id, name, email) => {
    localStorage.setItem("id", id); //"" quote er moddhe ja ase seigulo hocche key
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTableDark("");
            } else {
              setTableDark("table-dark");
            }
          }}
        />
      </div>
      <h2>Read Operation/Post</h2>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => (
            <tr key={dat.id}>
              <th scope="row">{dat.id}</th>
              <td>{dat.name}</td>
              <td>{dat.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleStorage(dat.id, dat.name, dat.email);
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(dat.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/">
        <button className="btn btn-success">Got To Create Page</button>
      </Link>
    </>
  );
};

export default Read;
