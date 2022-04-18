import { createContext, useContext, useState} from "react";
const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)
    const isInCart = (id) =>{
        return cartList.some((item) => item.id === id)
    }
    const eliminarItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) //hago un filtro
    }
    const vaciarCart = () =>{
        setCartList([])
    }
    const totalPrice = () =>{
        let price = 0
        cartList.forEach(item=> price += item.price * item.cantidad)
        return price
    }
    const subtotalPrice = (cantidad, price) =>{
        return cantidad*price
    }
    const totalItems = () => {
        setTotal(cartList.reduce((sum, item)=> sum + item.cantidad, 0))
    }
    const agregarCart = (item) =>{
        if (isInCart(item.id)){
            let itemIndex = cartList.findIndex(prod => prod.id === item.id)
            cartList[itemIndex].cantidad += item.cantidad
        } else {
            setCartList ([...cartList, item])
        }
        totalItems()
    }

    return (
        <CartContext.Provider value={{
            cartList,  //primero use
            total,
            agregarCart, //despues agregamos la funciones
            vaciarCart,
            isInCart,
            eliminarItem,
            totalPrice,
            subtotalPrice,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider