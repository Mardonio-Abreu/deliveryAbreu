import { getProductById } from "../items";
const ItemDetail = (id) => {

    const item = getProductById(id);
    console.log(item);

    return(
        <h1>I'm item detail</h1>
    );
};

export default ItemDetail;