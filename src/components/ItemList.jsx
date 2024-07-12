import { getProducts } from "../items";
const ItemList = () => {

    const items = getProducts();
    console.log(items)

    return (
    
    <>
        <h1>I'm the item's list</h1>
        
    </>
);

}

export default ItemList;