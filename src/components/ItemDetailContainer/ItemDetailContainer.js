import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from './ItemDetail'
import getStock from "../herlpers/getStock";
import stock from "../data/stock";
import "./ItemDetail.css"
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
    const {idItem} = useParams ()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true)
        getStock(stock)
        .then((res) =>{
            setItem(res.find((item) => item.id === idItem))
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }, [idItem])

  return (
    <div className='item-detail-container'>
        {
            loading? 
            <div className="loader"></div>
            :
            <ItemDetail item={item} />
        }
    </div>
  )
    }

export default ItemDetailContainer