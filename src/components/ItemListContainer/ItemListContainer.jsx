import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock.js';
import './ItemListContainer.css';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Llama a la función según si hay categoría o no
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();

    fetchData
      .then((products) => {
        setItems(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga
      });
  }, [categoryId]); // Ejecuta el useEffect al cambiar la categoría

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Productos"}</h2>
      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.nombre} className="product-image" />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>Precio: U$S {item.precio}</p>
            <Link to={`/item/${item.id}`} className="view-more-button">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;