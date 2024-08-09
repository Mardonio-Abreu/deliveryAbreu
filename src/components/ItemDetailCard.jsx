import Card from 'react-bootstrap/Card';
import ItemQuantityForm from './ItemQuantityForm';

const ItemDetailCard = ({item}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/img/${item.thumbnail}`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          {`Precio: ${item.precio}`}
        </Card.Text>
        <ItemQuantityForm itemId={item.id}/>
      </Card.Body>
    </Card>
    </>
  );
};

export default ItemDetailCard;

