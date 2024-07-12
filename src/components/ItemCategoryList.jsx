import { getProductsByCategory } from "../items"

const ItemCategoryList = ({category}) => {

    const itemsCategory = getProductsByCategory(category);
    console.log(itemsCategory);

    return(
        <h1>I am item category list</h1>
    );


};

export default ItemCategoryList;