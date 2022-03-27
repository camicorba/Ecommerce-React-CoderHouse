import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
function CartWidget () {
    const {cartList, total} = useCartContext()
    return(
        <Link to='/cart'>
            {cartList.length === 0?
                <FontAwesomeIcon icon={faShoppingCart} className= "icon-white"/>
            :
            <div>
                <FontAwesomeIcon icon={faShoppingCart} className= "icon-white"/>
                <span> {total}</span>
            </div>
            }
        </Link>



    )
}
export default CartWidget