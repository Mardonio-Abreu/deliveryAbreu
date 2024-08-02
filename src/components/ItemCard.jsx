import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
export const ItemCard = ({item}) => {
    return (
      
      <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
            {item.price}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      
    );
  }
  