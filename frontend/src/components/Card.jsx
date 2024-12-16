import React, { useContext, useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { CartDispatchContext, CartStateContext } from "./ContextReducer";

function Card(props) {
  const priceref = useRef();
  const dispatch = useContext(CartDispatchContext);
  const data = useContext(CartStateContext);
  const [qty, setQty] = useState("1");
  const [size, setSize] = useState("");
  const options = props.options;
  // console.log(options);

  const keys = Object.keys(options);
  // console.log(keys);
  let food_Item = props.foodItem;
  let totalprice = qty * parseInt(options[size]);

  function handleAddtoCart() {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food) {
      if (food.size === size) {
        dispatch({
          type: "UPDATE",
          id: food_Item._id,
          price: totalprice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        dispatch({
          type: "ADD",
          id: food_Item._id,
          name: food_Item.name,
          price: totalprice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }

    dispatch({
      type: "ADD",
      id: food_Item._id,
      name: food_Item.name,
      price: totalprice,
      qty: qty,
      size: size,
    });
    console.log(data);
  }

  useEffect(() => {
    setSize(priceref.current.value);
  }, []);

  return (
    <div className="m-3">
      <div
        className="card mt-3"
        style={{
          width: "18rem",
          maxHeight: "400px",
        }}
      >
        <img
          src={food_Item.img}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{food_Item.name}</h5>
          <p className="card-text">Here comes the food things</p>
          <div className="container w-100 text-white">
            <select
              className="bg-success  m-2 text-light"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (x, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select
              ref={priceref}
              className="bg-success m-2 text-light"
              onChange={(e) => setSize(e.target.value)}
            >
              {keys.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline fs-5 text-dark h-75">₹{totalprice}/-</div>
          </div>
          <hr />
          <div className=" d-flex justify-content-center">
            <button className="btn btn-success" onClick={handleAddtoCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
