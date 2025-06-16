import { useEffect, useState } from "react";
import { getAllItems } from "../api/items.api";
import { ItemCard } from "./ItemCard";

export function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const res = await getAllItems();
      setItems(res.data);
    }
    loadItems();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
