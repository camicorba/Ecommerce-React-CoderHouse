import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'
function ItemListContainer({titulo}) {

    return (
        <div>
            <h1 className="titulos">Bienvenido al Ecommerce {titulo}</h1>
            <ItemCount stock={8} initial={0}/>
        </div>
    )
    
}

export default ItemListContainer