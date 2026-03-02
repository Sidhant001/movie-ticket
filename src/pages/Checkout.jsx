import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout(){
    const { items , totalAmount} = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form , setForm] = useState({
        fullName:"",
        email:"",
        phone:"",
        seats: 1,
        payments:"UPI",
    })
    const [success , setSuccess] = useState(false);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (items.length === 0){
            alert("cart is empty")
            return;
      }
      dispatch (clearCart())
      setSuccess(true)
      setTimeout(()=>{
        navigate("/movies")
      },1500)
    }
    if (success){
        return(
            <div className = "min-h-screen flex items-center justify-center text-black dark:text-white bg-gray-100 dark:bg-gray-900">
                <h2 className ="text-2xl font-bold">
                    Booking Successfull .......
                </h2>
            </div>
        )
    }
      return (

    <div className="min-h-screen bg-gray-400 dark:bg-gray-700 text-black dark:text-white p-6 grid md:grid-cols-2 gap-8">

      <div>
        <h2 className="text-2xl text-black dark:text-white font-bold mb-6">Checkout</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full text-black dark:text-white p-2 rounded bg-gray-100 dark:bg-gray-900"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full text-black dark:text-white p-2 rounded bg-gray-100 dark:bg-gray-900"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full text-black dark:text-white p-2 rounded bg-gray-100 dark:bg-gray-900"
          />

          <input
            type="number"
            name="seats"
            min="1"
            value={form.seats}
            onChange={handleChange}
            className="w-full text-black dark:text-white p-2 rounded bg-gray-100 dark:bg-gray-900"
          />

          <select
            name="payment"
            onChange={handleChange}
            className="w-full text-black dark:text-white p-2 rounded bg-gray-100 dark:bg-gray-900"
          >
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Cash On Delivery</option>
          </select>

          <button
            type="submit"
            className="w-full text-black dark:text-white bg-blue-600 py-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-black dark:text-white">
        <h3 className="text-xl text-black dark:text-white font-bold mb-4">Booking Summary</h3>

        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name || item.title} (x{item.quantity})</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-4 border-gray-600 text-black dark:text-white" />

        <h4 className="text-lg font-bold text-black dark:text-white">
          Total: ₹{totalAmount}
        </h4>
      </div>
     </div>
  );
}
export default Checkout;