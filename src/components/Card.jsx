import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCard({item}) {
  return (
    <>
    <h1>"Surprise MotherFather!"</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
