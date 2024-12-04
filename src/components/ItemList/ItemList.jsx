import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
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
  );
}

export default ItemList;
