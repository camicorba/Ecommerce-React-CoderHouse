import React from "react";
import { useCartContext } from "../context/cartContext";
function Cart(){
    const {cartList} = useCartContext()
    console.log(cartList)
    return (
        <div>
            <h2>Proximamente Carrito...</h2>
            {cartList.map (item => <li> Producto:{item.title} Precio:$ {item.price} Cantidad: {item.cantidad}</li>)}
        </div>
        )
}

export default Cart