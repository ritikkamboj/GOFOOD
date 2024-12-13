import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const options = props.options;
  console.log(options);

  const keys = Object.keys(options);
  // console.log(keys);
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
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.food_name}</h5>
          <p className="card-text">Here comes the food things</p>
          <div className="container w-100 text-white">
            <select className="bg-success  m-2 text-light">
              {Array.from(Array(6), (x, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="bg-success m-2 text-light">
              {keys.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline fs-5 text-dark h-75">Total Price </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
