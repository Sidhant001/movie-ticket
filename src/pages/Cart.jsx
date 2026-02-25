import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart 🛒</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-800 p-4 mb-3 rounded"
            >
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price}</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className=" mt-6 text-xl text-white">
            Total: ₹{totalAmount}
          </h3>
          <button className="mt-5 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Checkout
            </button>
          
        </>
      )}
    </div>
  );
}

export default Cart;