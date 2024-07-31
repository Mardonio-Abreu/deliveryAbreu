import db from "../db/db.js"
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import BasicCard from "./Card.jsx";


const getItems = () => {
    const itemsRef = collection(db, "items");
    getDocs(itemsRef)
    .then((ans) => {
      const data = ans.docs.map((itemDB) => {
        return{id: itemDB.id, ...itemDB.data()}
      });
        return(data);
    });
};

const getFiltertedItems = (categoryId) => {
  const itemsRef = collection(db, "items");
  const q = query(itemsRef, where("category", "==", categoryId));
  getDocs(q).then((ans) => {
    const data = ans.docs.map((itemDB) => {
      console.log({id: itemDB.id, ...itemDB.data()});
    });
    console.log(data);
    return("UwU");
});
};

const itemCards = (items) => {
    return(
         <div className="ItemCards">
          {
            items.map(({item}) => {
              return <BasicCard item={item} />
            })
          };
        
        </div>
      );
  
    };

    
  

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();
  useEffect(() => {
    
  if(categoryId){
    setItems(getFiltertedItems(categoryId));
    itemCards(items);
  } else {
    setItems(getItems());
    itemCards(items);
  }
  }, [categoryId]);
};


