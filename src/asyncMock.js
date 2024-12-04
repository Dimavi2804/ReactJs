const products = [
    {
      id: 1,
      nombre: "INTEL PROCESADOR CORE I3-14100 LGA 1700",
      descripcion: "PROCESADOR LGA 1700",
      precio: 212,
      categoria: "PROCESADOR",
      img: "/img/i3-14100.jpg",
      stock: 7,
    },
    {
      id: 2,
      nombre: "INTEL PROCESADOR CORE I5-14400 LGA 1700",
      descripcion: "PROCESADOR LGA 1700",
      precio: 344,
      categoria: "PROCESADOR",
      img: "/img/I5-14400.jpg",
      stock: 17,
    },
    {
      id: 3,
      nombre: "AMD PROCESADOR RYZEN 5 5600 AM4",
      descripcion: "PROCESADOR AM4",
      precio: 178,
      categoria: "PROCESADOR",
      img: "/img/RYZEN5-5600.jpg",
      stock: 10,
    },
    {
      id: 4,
      nombre: "AMD PROCESADOR RYZEN 7 5700G AM4",
      descripcion: "PROCESADOR AM4",
      precio: 212,
      categoria: "PROCESADOR",
      img: "/img/RYZEN7-5700G.jpg",
      stock: 9,
    },
    {
      id: 5,
      nombre: "ASUS PLACA H670-PRO WIFI D4",
      descripcion: "MOTHERBOARD LGA 1700",
      precio: 367,
      categoria: "MOTHERBOARD",
      img: "/img/ASUS-H670-PRO-WIFI-D4.jpg",
      stock: 66,
    },
    {
      id: 6,
      nombre: "ASUS PLACA PRIME Z790M-PLUS",
      descripcion: "MOTHERBOARD LGA 1700",
      precio: 293,
      categoria: "MOTHERBOARD",
      img: "/img/ASUS-PRIME-Z790M-PLUS.jpg",
      stock: 3,
    },
    {
      id: 7,
      nombre: "ASUS PLACA TUF GAMING B450M- PLUS II",
      descripcion: "MOTHERBOARD AM4",
      precio: 165,
      categoria: "MOTHERBOARD",
      img: "/img/ASUS-TUF-GAMING-B450M-PLUS-II.jpg",
      stock: 6,
    },
    {
      id: 8,
      nombre: "GIGABYTE PLACA A520I AC MINI ITX",
      descripcion: "MOTHERBOARD AM4",
      precio: 150,
      categoria: "MOTHERBOARD",
      img: "/img/GIGABYTE-A520I-AC-MINI-ITX.jpg",
      stock: 2,
    },
    {
      id: 9,
      nombre: "CORSAIR MEMORIA 8GB DDR4 PC2666",
      descripcion: "MEMORIA RAM DDR4",
      precio: 25,
      categoria: "MEMORIA RAM",
      img: "/img/CORSAIR-8GB-DDR4-PC2666.jpg",
      stock: 30,
    },
    {
      id: 10,
      nombre: "NETAC MEMORIA SHADOW DDR4 16GB 2666",
      descripcion: "MEMORIA RAM DDR4",
      precio: 34,
      categoria: "MEMORIA RAM",
      img: "/img/NETAC-SHADOW-DDR4-16GB-2666-NTSDD4P26SP-16R.jpg",
      stock: 16,
    }
  ];
  
  // Función para simular obtener todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  // Función para simular obtener un producto por ID
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === id));
      }, 500);
    });
  };
  
  // Función para simular obtener productos por categoría
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(product => product.categoria === categoryId));
      }, 500);
    });
  };
  