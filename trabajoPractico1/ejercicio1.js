//1- Empleando Map generar un arreglo con el cuadrado de cada elemento de otro arreglo. Asumir que cada elemento del arreglo es un numero.

const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(x => {return x ** 2});

console.log(cuadrados);