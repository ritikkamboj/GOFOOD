import React, { useContext } from "react";
import {
  CartDispatchContext,
  CartStateContext,
} from "../components/ContextReducer";

function Cart() {
  let data = useContext(CartStateContext);
  let dispatch = useContext(CartDispatchContext);
  //   console.log(data, "jai maata di ");
  console.log(data.length);
  if (data.length === 0) {
    return (
      <div className="w-100 text-center fs-5 text-white">NO Data Found</div>
    );
  }

  let total_price = data.reduce((total, item) => total + item.price, 0);
  console.log(total_price);

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => dispatch({ type: "DEL", index: index })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-block w-100">
        <p className="fs-5 text-white m-3 d-flex justify-content-center align-items-center">
          Total Price : ₹{total_price}/-
        </p>
      </div>
    </div>
  );
}

export default Cart;
