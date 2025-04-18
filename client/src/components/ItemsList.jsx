import {useEffect, useState} from 'react';
import { getAllItems } from '../api/items.api';
import { ItemCard } from './ItemCard';

export function ItemsList() {

      const [items, setItems] = useState([]);
      useEffect(() => {
            
            async function loadItems(){
                  const res = await getAllItems()
                  setItems(res.data)
                  console.log(res.data)
            }
            loadItems()
      
      }, []);
      
      return(
            <div>
                  {items.map((item) => (
                       <ItemCard item={item} key={item.id} /> 
                  ))}
            </div>
      )
}

