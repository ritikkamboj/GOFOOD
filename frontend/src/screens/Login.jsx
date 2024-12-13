import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    console.log(response);

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("please enter right credentials ");
    } else {
      navigate("/");
    }
  }

  function onChange(event) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
            name="email"
            value={credentials.email}
            onChange={onChange}
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
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-success m-2">
          Submit
        </button>
        <button type="submit" className="btn btn-danger m-2">
          <Link to="/signup" className="nav-link">
            I am a New User
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
