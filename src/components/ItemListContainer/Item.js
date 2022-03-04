import React from "react";
const Item = ({title, description, price, imgUrl, stock}) => {
    return (
      <div className='item'>
          <div className='title'>{title}</div>
          <img src={imgUrl} alt={title} />
          <div className='desc'>{description}</div>
          <div className='price'>Precio: ${price}</div>
          <button>Ver detalle</button>
      </div>
    )
  }
  export default Item