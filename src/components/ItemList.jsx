import { getItems } from "../firebase/firebaseQueries";
const ItemDetail = () => {

  const items = getItems('Tienda');
  console.log(items)

  return(
    <h1>Surprise MotherFather!</h1>
  );
};

export default ItemDetail;
