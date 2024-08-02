import db from "../db/db.js";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "./ItemCard";

const getItemById = async (itemId) => {
  const docRef = doc(db, "items", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document");
    return null; // Ensure a return value
  }
};

const ItemDetail = () => {
  const [item, setItem] = useState(null); // Initialize with null or a default value
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (itemId) {
          const ans = await getItemById(itemId);
          setItem(ans);
        } else {
          console.log("Error getting item");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItems();
  }, [itemId]);

  return <ItemCard item={item} />;
};

export default ItemDetail;
