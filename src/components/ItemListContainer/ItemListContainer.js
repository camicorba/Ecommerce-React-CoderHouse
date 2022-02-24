import React from "react";
import './ItemListContainer.css'
function ItemListContainer({titulo}) {

    return (
        <div>
            <h1 className="titulos">Bienvenido al Ecommerce {titulo}</h1>
        </div>
    )
    
}

export default ItemListContainer