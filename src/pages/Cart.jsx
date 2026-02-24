import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart 🛒</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <hr />
      <h2>Total Items: {totalQuantity}</h2>
      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
  );
}

export default Cart;