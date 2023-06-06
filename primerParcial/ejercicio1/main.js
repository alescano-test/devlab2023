//! Tomando como ejemplo el siguiente arreglo con alimentos:

const alimentos = [
  { nombre: "Pera", rubro: "Fruta", precio: 5 },
  { nombre: "Pan", rubro: "Panaderia", precio: 8 },
  { nombre: "Jamon", rubro: "Fiambreria", precio: 12 },
  { nombre: "Banana", rubro: "Fruta", precio: 7 },
  { nombre: "Facturas", rubro: "Panaderia", precio: 18 },
  { nombre: "Queso", rubro: "Fiambreria", precio: 12 },
  { nombre: "Manzana", rubro: "Fruta", precio: 6 },
  { nombre: "Criollos", rubro: "Panaderia", precio: 11 },
  { nombre: "Mortadela", rubro: "Fiambreria", precio: 5 },
];

//? Empleando Map, Filter, Some, Reduce y/o Find escriba un programa que:

//* Muestre por pantalla el rubro con menor promedio de precios.

const alimentosPorRubro = alimentos.reduce((rubros, alimento) => {
  if (!rubros[alimento.rubro]) {
    rubros[alimento.rubro] = [];
  }
    rubros[alimento.rubro].push(alimento.precio);
  return rubros
}, []);

const promedioRubro = Object.entries(alimentosPorRubro).map(([rubro, precios])=> {
  const promedio = precios.reduce((suma, precio) => suma + precio, 0);
  const promedioPrecio = promedio / precios.length;
  return { rubro, promedioPrecio }
}); 

const menorPromedioRubro = promedioRubro.reduce((menorPromedio, promedioActual) => {
  if (!menorPromedio || menorPromedio.precio < promedioActual.precio) {
    return promedioActual;
  }
  return menorPromedio;
}, null);


//* Muestre por pantalla el producto con el menor precio para cada rubro.

console.log(menorPromedioRubro);
