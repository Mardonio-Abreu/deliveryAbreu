import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = ()  => {
  return (
    <Dropdown ata-bs-theme="dark">
      <Dropdown.Toggle>
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/category/Comida">Comida</Dropdown.Item>
        <Dropdown.Item href="/category/Farmacia">Farmacia</Dropdown.Item>
        <Dropdown.Item href="/category/Tienda">Tienda</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;