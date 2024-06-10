import Nav from "react-bootstrap/Nav";
const NavBar = () => {

    return (

<Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Option 1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 3</Nav.Link>
  </Nav.Item>
</Nav>
);

};

export default NavBar;