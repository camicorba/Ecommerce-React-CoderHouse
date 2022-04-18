import './Cart.css'
import { useCartContext } from "../context/cartContext";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart(){
    const {cartList, vaciarCart, eliminarItem, totalPrice, subtotalPrice} = useCartContext()
    console.log(cartList)
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
            <h2 className='title-cont'>Detalle de tu compra</h2>
            {cartList.map (item =>
            <div className="item-cart" key={item.id}>
                <img className='cart-img' alt='product' src={item.image}/>
                <div className='cart-content'><b>Producto</b><br/>{item.title}</div>
                <div className='cart-content'><b>Unidades</b><br/>{item.cantidad}</div>
                <div className='cart-content'><b>Precio unitario</b><br/> $ {item.price}</div>
                <div className='cart-content'><b>Subtotal</b><br/> $ {subtotalPrice(item.cantidad, item.price)}</div>
                <FontAwesomeIcon className='item-delete' icon={faTrashCan} onClick={()=> eliminarItem(item.id)}/>
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