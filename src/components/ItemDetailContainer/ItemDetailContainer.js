import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from './ItemDetail'
import getStock from "../herlpers/getStock";
import stock from "../data/stock";
import "./ItemDetail.css"
function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true)
        getStock(stock)
        .then((res) =>{
            setItem(res.find((item) => item.id ===1)) // buscamos un solo item
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }, [])

  return (
    <div className='item-detail-container'>
        {
            loading? 
            <div className='cargando'>Cargando pagina...</div>
            :
            <ItemDetail {...item} />
        }
    </div>
  )
    }

export default ItemDetailContainer