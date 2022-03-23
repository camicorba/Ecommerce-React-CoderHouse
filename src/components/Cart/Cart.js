import React from "react";
import './Cart.css'
import { useCartContext } from "../context/cartContext";
function Cart(){
    const {cartList, vaciarCart, eliminarItem} = useCartContext()
    console.log(cartList)
    return (
        <div className="cart">
            <h2>Detalle de tu compra</h2>
            {cartList.map (item => 
            <div className="item-cart">
                <li> Producto: {item.title} Precio: $ {item.price} Cantidad: {item.cantidad}</li>
                <button className="btn-cart" onClick={()=> eliminarItem(item.id)}>Eliminar</button>
            </div>
            )}
            <button onClick={vaciarCart}>Vaciar Carrito</button>
        </div>
        )
}

export default Cart