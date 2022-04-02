import React from "react";
import { Link } from "react-router-dom";
import './ItemListContainer.css'
const Item = ({id, item, title, description, price, image, stock, category}) => {
    return (
      <div className='item' key={id}>
          <img className="item-img" src={image} alt={title} />
          <div className='title'>{title}</div>
          <div className='price'>Precio: $ {price}</div>
          <Link to={`/item/${id}`}><button className='btn-item'>Ver detalle</button></Link>
      </div>
      )
}
  export default Item