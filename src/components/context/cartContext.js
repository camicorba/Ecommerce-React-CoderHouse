import { createContext, useContext, useState } from "react";
const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const isInCart = (id) =>{
        return cartList.some((item) => item.id === id)
    }
    const agregarCart = (item) =>{
        if (isInCart(item.id)){
            let itemIndex = cartList.findIndex(prod => prod.id === item.id) //busco el item duplicado en el array
            cartList[itemIndex].cantidad += item.cantidad //le sumo la cantidad elegida
        } else {
            setCartList ([...cartList, item])
        }
    }
    const eliminarItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) //hago un filtro
    }
    const vaciarCart = () =>{
        setCartList([])
    }
    const totalCart = () =>{
        return cartList.reduce((subt, item) => subt = subt+ item.price*item.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,   //primero const
            agregarCart, //despues agregamos la funciones
            vaciarCart,
            isInCart,
            eliminarItem,
            totalCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider