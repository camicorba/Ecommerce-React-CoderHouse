import { createContext, useContext, useState } from "react";
const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const agregarCart = (item) =>{
        setCartList ([...cartList, item])
    }

    return (
        <CartContext.Provider value={{
            cartList,   //primero const
            agregarCart //despues agregamos la funciones
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider