import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BasicCard = ({item}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/img/${item.thumbnail}`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <NavLink href={`/item/${item.id}`}>
          <Button variant="primary">See item</Button>
        </NavLink>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicCard;
