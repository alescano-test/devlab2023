// 3- Empleando Reduce calcule el promedio de un arreglo con números.

const numeros = [1, 2, 3, 4, 5];

const valor = numeros.reduce((acumulador , actual) => acumulador + actual, 0);
console.log(valor/numeros.length);

//! Salida
//? { nombre: 'David', prom: 100 }