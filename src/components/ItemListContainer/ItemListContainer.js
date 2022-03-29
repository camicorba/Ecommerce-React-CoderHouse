import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer() {

    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(true) 

    const { categoryId } = useParams ();

    useEffect(() => {
        const db = getFirestore();
        if (categoryId) {
          const queryCollection = collection(db, 'items')
          const queryFilter = query(queryCollection, where('category', '==', categoryId));
          getDocs(queryFilter)
            .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
          const queryCollection = collection(db, 'items')
          getDocs(queryCollection)
            .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [categoryId])

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