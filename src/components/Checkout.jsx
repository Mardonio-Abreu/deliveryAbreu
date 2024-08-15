import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Checkout = () => {
  const { cartItems, deleteCart,  } = useContext(CartContext);
  
  const [formData, setFormDat] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const saveInputData = (event) => {
    setDataForm({ ...formData, [event.target.name]: event.target.value });
  };

  const sendOrder = async(event) => {
    event.preventDefault();
    //formatear correctamente la orden
    const data = {
      buyer: { ...formData },
      items: [...carrito],
      total: precioTotal(),
    };
    //validar formulario antes de subir la orden
    const response = await validateForm(datosForm)
    if(response.status === "success"){
      subirOrden(datos);
    }else{
      toast.warn(response.message)
    }
  };

  const subirOrden = (datos) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, datos)
      .then((respuesta) => {
      setIdOrden(respuesta.id);
      })
      .finally(()=>{
        vaciarCarrito()
      })
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div>
          <h2>Orden generada con exito!! 😁</h2>
          <p>guarde el id de su orden: {idOrden} </p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};
export default Checkout;