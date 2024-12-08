import React from "react";
import { Link } from "react-router-dom";

function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" style={{ maxHeight: "500px" }}>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
              style={{
                filter: "brightness(50%)",
                objectFit: "cover !important",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Third slide"
            />
          </div>
          <div className="carousel-caption">
            <div className="carousal-caption d-md-block">
              <nav
                className="navbar navbar-light "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <form class="form-inline">
                  <input
                    className="form-control mr-sm-2 mb-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ width: "500px" }}
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0 "
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </nav>
            </div>
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
    </div>
  );
}

export default Carousal;
