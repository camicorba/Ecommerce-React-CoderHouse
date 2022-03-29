import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from './ItemDetail'
import "./ItemDetail.css"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
function ItemDetailContainer() {
    const {idItem} = useParams ()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true) 

    useEffect(()=>{
        const db = getFirestore();
        const queryDb = doc(db, 'items', idItem);
        getDoc(queryDb)
            .then(resp=> setItem({id: resp.id, ...resp.data()}))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [])

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