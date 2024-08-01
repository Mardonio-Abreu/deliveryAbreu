import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCard({item}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/img/${item.thumbnail}`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicCard;
