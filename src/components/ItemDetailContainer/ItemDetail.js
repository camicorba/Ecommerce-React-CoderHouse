import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title, description, price, imgUrl, stock}) => {
  return (
    <div className='item-detail'>
        <div className='detail-img'>
            <img src={imgUrl} alt={title} />
        </div>
        <div className='detail'>
            <h1 className='detail-title'>{title}</h1>
            <h2 className='detail-desc'>{description}</h2>
            <h2 className='detail-price'>${price}</h2>
            <ItemCount/>
        </div>
    </div>
  )
}
export default ItemDetail