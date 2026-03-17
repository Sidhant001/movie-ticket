import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart , addToCart ,clearCart} from "../features/cartSlice";
import {useNavigate} from "react-router-dom"
function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart 🛒</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-black dark:text-white bg-gray-300 dark:bg-gray-700 p-4 mb-3 rounded"
            >
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price}</span>
                       <div className="flex items-center gap-3">
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-600 px-3 py-1 rounded"
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch(addToCart(item))
        }
        className="bg-green-600 px-3 py-1 rounded"
      >
        +
      </button>
           </div>

          <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <h3 className=" mt-6 text-xl text-black dark:text-white">
            Total: ₹{totalAmount}
          </h3>
          <button
          onClick = {() => navigate("/checkout")} 
          className="mt-5 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Checkout
            </button>
            <button
            onClick={()=>dispatch(clearCart())}
            className="absolute right-9 bg-red-600 px-4 py-2 rounded  hover:bg-red-700"
            >Remove</button>
          
        </>
      )}
    </div>
   
  );
}

export default Cart;