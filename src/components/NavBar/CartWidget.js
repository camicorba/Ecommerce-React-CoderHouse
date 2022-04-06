import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function CartWidget () {
    const {cartList, total, totalItems} = useCartContext()
    useEffect(()=>{
        totalItems()
        }, [cartList])
    return(
        <Link to='/cart'>
            {cartList.length === 0?
                <FontAwesomeIcon icon={faShoppingCart} className= "icon-white"/>
            :
            <div>
                <FontAwesomeIcon icon={faShoppingCart} className= "icon-white"/>
                <span className="cart-cantidad"> {total}</span>
            </div>
            }
        </Link>
    )
}
export default CartWidget