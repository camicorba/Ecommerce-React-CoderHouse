import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../context/cartContext";
const CartWidget = () => {
    const {totalItem} = useCartContext()
    return(
        <div>
        <FontAwesomeIcon icon={faShoppingCart} className= "icon-white"/>
        <span> {totalItem()}</span>
        </div>


    )
}
export default CartWidget