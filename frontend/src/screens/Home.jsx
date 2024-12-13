import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import { Link } from "react-router-dom";
// import { search } from "../../../backend/routes/createUser";

function Home() {
  const [serach, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/allData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data[0], data[1]);

    setFoodCat(data[1]);
    setFoodItem(data[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Carousal /> */}
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
                  <div class="form-inline">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      value={serach}
                      className="form-control mr-sm-2 mb-3"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ width: "500px" }}
                    />
                    {/* <button
                      className="btn btn-outline-success my-2 my-sm-0 "
                      type="submit"
                    >
                      Search
                    </button> */}
                  </div>
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
      <div className="container">
        {foodCat &&
          foodCat.map((data) => (
            <div className="row">
              <div className="fs-3 m-3 " key={data._id}>
                {data.CategoryName}
              </div>
              <hr />
              {foodItem &&
                foodItem
                  .filter(
                    (category) =>
                      category.CategoryName === data.CategoryName &&
                      category.name.toLowerCase().includes(serach.toLowerCase())
                  )
                  .map((filtered) => (
                    <div
                      className="col-12 col-md-6 col-lg-3"
                      key={filtered._id}
                    >
                      <Card
                        food_name={filtered.name}
                        image={filtered.img}
                        options={filtered.options[0]}
                        key={filtered._id}
                      />
                    </div>
                  ))}
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
