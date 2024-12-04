import { useCart } from "../../context/CartContext";

function Checkout() {
  const { cart, clearCart, removeItem, addItem } = useCart();

  
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.precio * item.quantity, 0);

  const handleRemoveUnit = (item) => {
    
    if (item.quantity > 1) {
      addItem(item, -1);
    } else {
      removeItem(item.id);
    }
  };

  const handleCheckout = () => {
    
    console.log("Orden finalizada", cart);
    clearCart();
  };

  return (
    <div>
      <h2>Resumen de compra</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
            <h3>{item.nombre}</h3>
            <p>Precio unitario: U$S {item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: U$S {item.precio * item.quantity}</p>
            <div>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => removeItem(item.id)}
              >
                Eliminar producto
              </button>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleRemoveUnit(item)}
              >
                - Quitar una unidad
              </button>
              <button
                className="btn btn-success btn-sm"
                onClick={() => addItem(item, 1)}
              >
                + Agregar una unidad
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <>
          <h3>Total de la compra: U$S {calculateTotal()}</h3>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Finalizar compra
          </button>
          <button className="btn btn-secondary ms-2" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
