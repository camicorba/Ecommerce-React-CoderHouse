import { useContext, useState } from "react"
import { useCartContext } from "../context/cartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartForm = () => {
    const {totalPrice, cartList} = useCartContext()
    const [dataForm, setdataForm] = useState({
        name:'', phone:'', email:'', adress:'', city:''
    })
    // const [id, setid] = useState('')

    const generarOrden = async(e) =>{
        e.preventDefault();
        let orden= {};
        orden.buyer = dataForm
        orden.total= totalPrice()
        orden.items= cartList.map(cartItem=>{
            let id= cartItem.id
            let title = cartItem.title
            let price = cartItem.price
            return {id, title, price}
        })
        console.log(orden)

        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, orden)
            .then(resp =>{
                alert(`Tu orden esta siendo preparada. ORDEN: ${resp.id}`);
                window.location = "/"
            })
            .catch(err=>console.error(err))
            .finally(()=>console.log('Orden finalizada'))
    }
    const handleChange = (e)=>{
        setdataForm({ ...dataForm, [e.target.name]: e.target.value})
    }
    console.log(dataForm)

    return(
        <div className="cont-form">
            <h2>Completa tus datos:</h2>
            <form  onSubmit={generarOrden}>
                <h3>Datos de Contacto</h3>
                <input type='text' name='name' value={dataForm.name} onChange={handleChange} placeholder='Nombre Completo'></input>
                <br/>
                <input type='number' name='phone' value={dataForm.phone} onChange={handleChange} placeholder='Telefono'></input>
                <br/>
                <input type='email' name='email' value={dataForm.email} onChange={handleChange} placeholder='Email'></input>
                <br/>
                <input type='checkbox' value='check'></input>
                <p>Deseo recibir ofertas y novedades al mail</p>
                <br/>
                <h3>Datos de Envio</h3>
                <input type='text' name='adress' value={dataForm.adress} onChange={handleChange} placeholder='Direccion'></input>
                <br/>
                <input type='text' name='city' value={dataForm.city} onChange={handleChange} placeholder='Ciudad'></input>
                <br/>
                <button>Confirmar datos</button>
            </form>
            

        </div>
    )

}
export default CartForm