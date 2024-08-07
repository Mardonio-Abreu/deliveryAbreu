import Form from 'react-bootstrap/Form';

function ItemQuantityForm() {
  return (
    <Form.Select aria-label="Qauntity">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </Form.Select>
  );
}

export default ItemQuantityForm;