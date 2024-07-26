import { useState } from 'react';
import { app } from '../firebase'

const ItemList = () => {

    const [items, setItems] = useState([]);

    db.collection('items').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          setItems(items => [...items ,[doc.id, doc.data()]]);
        });
      });
    
    console.log(items);

    return(
        <h1>I am an item category list</h1>
    );


};

export default ItemList;