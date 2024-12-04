import { useState } from "react";
import AddItemButton from "../AddItemButton/AddItemButton";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>{item.nombre}</h2>
      <img src={item.img} alt={item.nombre} style={{ width: "300px", height: "300px" }} />
      <p>{item.descripcion}</p>
      <p>Precio: U$S {item.precio}</p>

      {/* Selector de cantidad */}
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Botón para agregar al carrito */}
      <AddItemButton item={item} quantity={quantity} />
    </div>
  );
}

export default ItemDetail;
