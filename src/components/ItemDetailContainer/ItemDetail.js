import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemCount/ItemCount.css'

const ItemDetail = ({item}) => {
  return (
    <div className='item-detail' key={item.id}>
        <div className='detail-img'>
            <img src={item.imgUrl} alt={item.title} />
        </div>
        <div className='detail'>
            <h1 className='detail-title'>{item.title}</h1>
            <h2 className='detail-desc'>{item.description}</h2>
            <h2 className='detail-price'>$ {item.price}</h2>
            <ItemCount stock={8} initial={0}/>
        </div>
    </div>
  )
}
export default ItemDetail