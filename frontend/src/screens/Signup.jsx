import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setSredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createUser", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="m-2" for="exampleInputEmail1">
            UserName
          </label>
          <input
            type="text"
            className="form-control m-2"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label className="m-2" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control m-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="m-2" for="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            className="form-control m-2"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label className="m-2" for="exampleInputPassword1">
            Address
          </label>
          <input
            type="text"
            className="form-control m-2"
            id="exampleInputPassword1"
            placeholder="Enter Address"
          />
        </div>

        <button type="submit" className="btn btn-success m-2">
          Submit
        </button>
        <button type="submit" className="btn btn-danger m-2">
          <Link to="/login" className="nav-link">
            Already a User
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Signup;
