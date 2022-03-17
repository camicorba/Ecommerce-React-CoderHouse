import { Button } from 'bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemCount/ItemCount.css'

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(null)
  const onAdd = (count) =>{
    setCount(count)
  }
  return (
    <div className='item-detail' key={item.id}>
        <div className='detail-img'>
            <img src={item.imgUrl} alt={item.title} />
        </div>
        <div className='detail'>
            <h1 className='detail-title'>{item.title}</h1>
            <h2 className='detail-desc'>{item.description}</h2>
            <h2 className='detail-price'>$ {item.price}</h2>
          {
            count?
            <Link to={'/cart'}>
              <button> Finalizar compra</button>
            </Link>
            :
            <ItemCount stock={item.stock} initial={0} onAdd={(onAdd)}/>
          }
        </div>
    </div>
  )
}
export default ItemDetail