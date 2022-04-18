import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true) 
    const { idCategory } = useParams ();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items')
        if (idCategory) {
          const queryFilter = query(queryCollection, where('categoryId', '==', idCategory));
          getDocs(queryFilter)
            .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
          getDocs(queryCollection)
            .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [idCategory])
  return (
    <div className='item-list-container'>
        {
            loading? 
            <div className="loader"></div>
            :
            <div>
              <h2 className="title-cont">PRODUCTOS</h2>
            <ItemList items={items} />
            </div>
        }
    </div>
  ) 
}

export default ItemListContainer