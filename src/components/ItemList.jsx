import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const ItemList = () => {

    useEffect(() =>{
      const [allItems, setAllItems] = useState([]);
      const db = getFirestore();

      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        setAllItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        console.log(allItems);
      });
    },[]);

    

    return(
      
      <h1>Surprise MotherFather!</h1>
  );
};


