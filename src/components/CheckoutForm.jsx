const CheckoutForm = () => {
  return (
    <div>
      <form className="form-checkout" onSubmit={sendOrder}>
        <label>Nombre</label>
        <input type="text" name="name" value={formData.name} onChange={saveInputData} />

        <label>Apellido</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={saveInputData} />

        <label>Teléfono</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={saveInputData}
        />

        <label>Email</label>
        <input type="text" name="email0" value={datosForm.email0} onChange={saveInputData} />
        <label>Email</label>
        <input type="text" name="email1" value={datosForm.email1} onChange={saveInputData} />

        <button className="sendOrder" type="submit">Enviar orden</button>
      </form>
    </div>
  );
};
export default CheckoutForm;