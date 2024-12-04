import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("categoria", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productos);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Productos"}</h2>
      
      <ItemList items={items} />
    </div>
  );
}




export default ItemListContainer;
