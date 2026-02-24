import React from "react";
import { useSelector } from "react-redux";

function Cart(){
    const cartItems = useSelector((state)=>state.cart.cart)
    return (
        <div>
            <h1>Cart</h1>
            {cartItems.map((item)=>
            <div key = {item.id}>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                </div>
            )}
        </div>
    )
}
export default Cart;