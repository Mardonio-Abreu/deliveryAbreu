import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemQuantityForm from '../ItemQuntityForm';

const ItemDetailCard = ({producto}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/img/${producto.thumbnail}`} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          <p>{producto.description}</p>
          <p>{`Precio: ${producto.precio}`}</p>
        </Card.Text>
          <ItemQuantityForm/>
          <Button variant="primary">Add item</Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default ItemDetailCard;

