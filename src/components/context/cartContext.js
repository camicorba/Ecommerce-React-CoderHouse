import { createContext, useContext, useState, useEffect} from "react";
const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState([0])
    const isInCart = (id) =>{
        return cartList.some((item) => item.id === id)
    }
    const agregarCart = (item) =>{
        totalItems()
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
    const totalPrice = () =>{
        let price = 0
        cartList.forEach(item=> price += item.price * item.cantidad)
        return price
    }

    const totalItems = () => {
        let items = 0
        cartList.forEach(item=> items+=item.cantidad)
        setTotal(items)
    }
    useEffect(() => {
        totalItems()
    }, [cartList])
    
    return (
        <CartContext.Provider value={{
            cartList,  //primero use
            total,
            agregarCart, //despues agregamos la funciones
            vaciarCart,
            isInCart,
            eliminarItem,
            totalPrice,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider