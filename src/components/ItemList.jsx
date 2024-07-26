import { getProducts } from "../items";
import {Cards} from "./Card";

const ItemList = () => {

    const items = getProducts();
    console.log(items);
    return(<h1>Surprise MotherFather!</h1>)

}

    /* return(
        <>
            {items.map( (item) => (

                <Cards item={item} />

            )

            )}
        </>
    );
    

}
 */

export default ItemList;