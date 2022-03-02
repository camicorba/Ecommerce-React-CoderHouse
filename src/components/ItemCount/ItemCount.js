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
    return(
        <div className="contador">
            <button onClick={decrease} disabled={count === initial}>-</button>
            <p>{count}</p>
            <button onClick={increase}>+</button>
        </div>
    )
}
export default ItemCount