import React, { useState } from "react";
import './Cart.css'
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { orderBy } from "firebase/firestore";

function Cart(){
    const [dataUsuario, setdataUsuario] = useState()
    const {cartList, vaciarCart, eliminarItem, totalPrice} = useCartContext()
    console.log(cartList)

    const generarOrden = () =>{
        let orden = {}
        orden.buyer = {name:'Camila', adress:'Alberdi 235', city:'Tandil', phone:'2216094380', email:'camincorbalan@gmail.com' }
        orden.total = totalPrice()
        orden.items = cartList.map(cartItem=>{
            const id= cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.cantidad

        })
    }
    if (cartList.length === 0) {
        return (
            <div>
                <h3>No tenes items agregados</h3>
                <Link to='/'><button>Ver productos</button></Link>
            </div>
        )
    }else{
return (
        <div className="cart">
            <h2>Detalle de tu compra</h2>
            {cartList.map (item => //agregar key dentro de li
            <div className="item-cart" key={item.id}>
                <li> Producto: {item.title} Precio: $ {item.price} Cantidad: {item.cantidad}</li>
                <button className="btn-cart" onClick={()=> eliminarItem(item.id)}>Eliminar</button>
            </div>
            )}
            <h4>Total de tu compra: $ {totalPrice()}</h4>
            <button onClick={vaciarCart}>Vaciar Carrito</button>
            <Link to='/form'>
                <button>Finalizar Compra</button>
            </Link>
            
        </div>
        )
    }
    
}

export default Cart