import { useContext, useState } from "react"
import CartContextProvider from "../context/cartContext"

const CartForm = () => {
    // const {totalPrice, cartList} = useContext(CartContextProvider)
    // const [dataForm, setdataForm] = useState({
    //     name:'', phone:'', email:'', adress:'', city:''
    // })
    // const [id, setid] = useState('')
    // const generarOrden = async(e) =>{
    //     e.preventDefault();
    //     let orden= {}
    //     orden.buyer = dataForm
    //     orden.total= totalPrice()
    //     orden.items= cartList.map(cartItem=>{
    //         let id= cartItem.id
    //         let name = cartItem.name
    //         let price = cartItem.price
    //         return {id, name, price}
    //     })

    // }

    return(
        <div className="cont-form">
            <h2>Completa tus datos:</h2>
            <h3>Form</h3>

        </div>
    )

}
export default CartForm