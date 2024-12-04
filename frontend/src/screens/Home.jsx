import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Here comes the food things</p>
            <div className="container w-100 text-white">
              jai baabe ki
              <select className="w-100 bg-success  m-2">
                {Array.from(Array(6), (x) => (
                  <option>some</option>
                ))}
              </select>
              <select className="w-100 bg-success m-2">
                <option value="full">Full</option>
                <option value="half">Half</option>
              </select>
            </div>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
