import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'
import productArray from "../herlpers/productArray"
import stock from "../data/stock";
import { useParams } from "react-router-dom";
function ItemListContainer() {
    const {idCategory} = useParams ()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true)
        productArray(stock) //llamamos a nuestra funcion para que nos traiga el listado de productos
        .then((res) =>{
            idCategory?
            setItems(res.filter((item)=> item.category === idCategory))
            :
            setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }, [idCategory])

  return (
    <div className='item-list-container'>
        {
            loading? 
            <div className="loader"></div>
            :
            <ItemList items={items} />
        }
    </div>
  ) 
}

export default ItemListContainer