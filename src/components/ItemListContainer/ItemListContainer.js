import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'
function ItemListContainer({titulo}) {
const onAdd = (count) => {
    console.log(`Se agrego ${count} producto al carrito`)
}
    return (
        <div>
            <h1 className="titulos">Bienvenido al Ecommerce {titulo}</h1>
            <ItemCount stock={8} initial={0} onAdd={onAdd}/>
        </div>
    )
    
}

export default ItemListContainer