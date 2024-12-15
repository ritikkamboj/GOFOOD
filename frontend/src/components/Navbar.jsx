import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

import { Link, useNavigate } from "react-router-dom";
import Modal from "../screens/Modal";
import Cart from "../screens/Cart";

function Navbar() {
  const [cartView, setCartView] = useState(false);

  const navigate = useNavigate();

  function funClose() {
    console.log("jai shree ram ");
    setCartView((value) => {
      return !value;
      // console.log("ram 2");
      // return false;
    });
  }

  const handleButton = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/cart">
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
                <li
                  className="nav-item m-2 text-success bg-white p-1 rounded"
                  onClick={() => setCartView(true)}
                >
                  <span className="nav-link" aria-current="page">
                    My Cart
                  </span>

                  <Badge bg="secondary">9</Badge>
                  {cartView ? (
                    <Modal onClose={funClose}>
                      <Cart />
                    </Modal>
                  ) : null}
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
