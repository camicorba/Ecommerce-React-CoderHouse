import { useState } from "react"
import { useCartContext } from "../context/cartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartForm = () => {
    const {totalPrice, cartList} = useCartContext()
    const [dataForm, setdataForm] = useState({
        name:'', phone:'', email:'', adress:'', city:''
    })
    const generarOrden = async(e) =>{
        e.preventDefault();
        const date = ()=>{
            let fecha = new Date();
            return fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
        }
        let orden= {};
        orden.buyer = dataForm
        orden.total= totalPrice()
        orden.items= cartList.map(cartItem=>{
            let id= cartItem.id
            let title = cartItem.title
            let price = cartItem.price
            return {id, title, price}
        })
        orden.date= date()
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
    return(
        <div className="cont-form">
            <h2 className='title-cont'>Completa tus datos:</h2>
            <form  onSubmit={generarOrden}>
                <h3 className='title-sec'>Datos de Contacto</h3>
                <input className="input" type='text' name='name' value={dataForm.name} onChange={handleChange} required placeholder='Nombre Completo'></input>
                <br/>
                <input className="input" type='number' name='phone' value={dataForm.phone} onChange={handleChange} pattern="[0-9]{10}" placeholder='Telefono'></input>
                <br/>
                <input className="input" type='email' name='email' value={dataForm.email} onChange={handleChange} required placeholder='Email'></input>
                <br/>
                <input type='checkbox' value='check'></input>
                <span>Deseo recibir ofertas y novedades al mail</span>
                <br/>
                <h3>Datos de Envio</h3>
                <input className="input" type='text' name='adress' value={dataForm.adress} onChange={handleChange} placeholder='Direccion'></input>
                <br/>
                <input className="input" type='text' name='city' value={dataForm.city} onChange={handleChange} placeholder='Ciudad'></input>
                <br/>
                <button>Confirmar datos</button>
            </form>
        </div>
    )
}
export default CartForm