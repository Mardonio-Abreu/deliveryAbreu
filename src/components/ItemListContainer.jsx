import db from "../db/db.js"
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import {ItemList} from "./ItemList.jsx"
import { useParams } from "react-router-dom";


const getItems = () => {
    const itemsRef = collection(db, "items");
    getDocs(itemsRef)
    .then((ans) => {
      const data = ans.docs.map((itemDB) => {
        return{id: itemDB.id, ...itemDB.data()}
      });
      console.log(data);
    });
};

const getFiltertedItems = (categoryId) => {
  const itemsRef = collection(db, "items");
  const q = query(itemsRef, where("category", "==", categoryId));
  getDocs(q).then((ans) => {
    const data = ans.docs.map((itemDB) => {
      return{id: itemDB.id, ...itemDB.data()}
    });
    console.log(data);
  });
};
export const ItemListContainer = () => {

  const {categoryId} = useParams();

useEffect(() => {

  if(categoryId){
    getFiltertedItems(categoryId)
  } else {
    getItems();
  }
  }, [categoryId]);

return(
  <div className="ItemListContainer">
    <ItemList />
  </div>
);

};


