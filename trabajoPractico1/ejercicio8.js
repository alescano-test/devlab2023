// 8- Teniendo un arreglo con nombre, precio y categoría de productos realice lo siguiente:

const productos = [
  { nombre: "Producto 1", precio: 20, categoria: "electronica" },
  { nombre: "Producto 2", precio: 30, categoria: "ropa" },
  { nombre: "Producto 3", precio: 40, categoria: "electronica" },
  { nombre: "Producto 4", precio: 50, categoria: "ropa" },
  { nombre: "Producto 5", precio: 60, categoria: "ropa" },
  { nombre: "Producto 6", precio: 70, categoria: "electronica" },
  { nombre: "Producto 7", precio: 80, categoria: "ropa" },
  { nombre: "Producto 8", precio: 90, categoria: "electronica" },
];


// a- Empleando Reduce genere un objeto de productos por categorías.
const productosPorCategorias = productos.reduce((item, producto) => {
  if (!item[producto.categoria]) {
    console.log(producto.categoria);
    item[producto.categoria] = [];
  }
  const obj = { nombre: producto.nombre, precio: producto.precio };
  console.log(obj);
  item[producto.categoria].push(obj);

  return item;
}, {});

// b- Empleando Map y Reduce genere un arreglo con promedio de precio por categoría
const promedios = Object.keys(productosPorCategorias).map( categoria => {
  const promedio =
    productosPorCategorias[categoria].reduce(
      (acc, producto) => (acc += producto.precio),
      0
    ) / productosPorCategorias[categoria].length;
  return { categoria, promedio };
});

console.log(productosPorCategorias);
console.log(promedios);
