import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../items";
const ItemListContainer = () => {

    return(
        <>
            <ItemList />
            <ItemDetail />
        </>
    );

};

export default ItemListContainer;