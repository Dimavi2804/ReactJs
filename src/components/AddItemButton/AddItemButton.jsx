import { useCart } from "../../context/CartContext";

function AddItemButton({ item, quantity }) {
  const { addItem } = useCart();

  return (
    <button onClick={() => addItem(item, quantity)}>
      Agregar al carrito
    </button>
  );
}

export default AddItemButton;
