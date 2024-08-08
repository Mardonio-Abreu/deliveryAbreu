import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemQuantityForm from './ItemQuantityForm';

const ItemDetailCard = ({producto}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/img/${producto.thumbnail}`} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          {producto.description}
        </Card.Text>
        <Card.Text>
          {`Precio: ${producto.precio}`}
        </Card.Text>
        <ItemQuantityForm itemId={producto.id}/>
      </Card.Body>
    </Card>
    </>
  );
};

export default ItemDetailCard;

