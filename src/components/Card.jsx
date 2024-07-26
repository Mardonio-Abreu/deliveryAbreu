import Card from 'react-bootstrap/Card';
export const Cards = ({item}) => {
    
    return(

             <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.item}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
             </Card>

    );
};

