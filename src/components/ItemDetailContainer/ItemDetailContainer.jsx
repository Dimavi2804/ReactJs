import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../asyncMock.js';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(parseInt(itemId))
      .then((product) => {
        setItem(product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [itemId]);

  if (!item) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{item.nombre}</h2>
      <img src={item.img} alt={item.nombre} style={{ width: "300px", height: "300px" }} />
      <p>{item.descripcion}</p>
      <p>Precio: U$S {item.precio}</p>
    </div>
  );
}

export default ItemDetailContainer;
