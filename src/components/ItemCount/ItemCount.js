import { useState } from "react";
import './ItemCount.css'

function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(0);
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
    const add = () => {
        onAdd(count)
    }
    return(
        <div className="contador">
            <div className="contador-control">
                <button onClick={decrease} disabled={count === initial}>-</button>
                <p>{count}</p>
                <button onClick={increase}>+</button>
            </div>
            <div className="contador-add">
                <button className="btn-add" onClick={add}>Añadir al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount