import React from "react";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleButton = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-1 fst-italic"
            to="https://github.com/"
          >
            GOFOOD
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/login"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/login"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex" style={{ listStyleType: "none" }}>
                <li className="nav-item m-2 text-success bg-white p-1 rounded">
                  <Link className="nav-link" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item m-2 bg-white text-success p-1 rounded">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </div>
            ) : (
              <div className="d-flex" style={{ listStyleType: "none" }}>
                <li className="nav-item m-2 text-success bg-white p-1 rounded">
                  <Link className="nav-link" aria-current="page" to="/login">
                    My Cart
                  </Link>
                </li>
                <li
                  className="nav-item m-2 bg-white text-danger p-1 rounded"
                  onClick={handleButton}
                >
                  <Link className="nav-link" to="/signup">
                    Logout
                  </Link>
                </li>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
