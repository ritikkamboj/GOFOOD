import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="m-3">
      <div
        className="card mt-3"
        style={{
          width: "18rem",
          maxHeight: "360px",
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top"
          alt="..."
        />
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
