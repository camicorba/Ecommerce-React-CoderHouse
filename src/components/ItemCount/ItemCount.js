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
    // const onAdd = () => {
    //     onAdd(count)
    // }
    return(
        <div className="contador">
            <div className="contador-control">
                <button onClick={decrease} disabled={count === initial}>-</button>
                <p>{count}</p>
                <button onClick={increase} disabled={count === stock}>+</button>
            </div>
            <div className="contador-add">
                <button className="btn-add" onClick={() => onAdd(count)}>Añadir al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount