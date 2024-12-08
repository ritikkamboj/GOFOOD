import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
      <div
        className="card mt-3"
        style={{
          width: "18rem",
          maxHeight: "360px",
        }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Here comes the food things</p>
          <div className="container w-100 text-white">
            <select className="bg-success  m-2 text-light">
              {Array.from(Array(6), (x, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="bg-success m-2 text-light">
              <option value="full">Full</option>
              <option value="half">Half</option>
            </select>
            <div className="d-inline fs-5 text-dark h-75">Total Price </div>
          </div>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
