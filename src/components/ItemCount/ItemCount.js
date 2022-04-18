import { useState } from "react";
import './ItemCount.css'

function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(1);
    const increase = () => {
        if (count < stock){
            setCount (count + 1)
        }
    }
    const decrease = () => {
        if (count > initial) {
            setCount (count - 1)
        }
    }
    return(
        <div className="contador">
            <div className="contador-control">
                <button className="control-btn" onClick={decrease} disabled={count === initial}>-</button>
                <p>{count}</p>
                <button className="control-btn" onClick={increase} disabled={count === stock}>+</button>
            </div>
            <div className="contador-add">
                <button className="btn-add" onClick={() => onAdd(count)}>Añadir al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount