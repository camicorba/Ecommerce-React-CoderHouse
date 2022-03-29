import React from "react";
import { Link } from "react-router-dom";
import './ItemListContainer.css'
const Item = ({id, item, title, description, price, image, stock, category}) => {
    return (
      <div className='item'>
          <div className='title'>{title}</div>
          <img src={image} alt={title} />
          <div className='desc'>{description}</div>
          <div className='price'>Precio: $ {price}</div>
          <Link to={`/item/${id}`}><button className='btn-item'>Ver detalle</button></Link>
      </div>
      )
}
  export default Item