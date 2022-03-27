import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'
import productArray from "../herlpers/productArray"
import stock from "../data/stock";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer() {
    const {idCategory} = useParams ()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false) 

    // useEffect(() => {
    //     setLoading(true)
    //     productArray(stock) //llamamos a nuestra funcion para que nos traiga el listado de productos
    //     .then((res) =>{
    //         idCategory?
    //         setItems(res.filter((item)=> item.category === idCategory))
    //         :
    //         setItems(res)
    //     })
    //     .catch((err)=>console.log(err))
    //     .finally(()=>{
    //         setLoading(false)
    //     })
    // }, [idCategory])
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items')
        const queryFilter = query(queryCollection, where('stock', '>=', 0))
        getDocs(queryFilter)
        .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }, [])
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