// 5- Empleando Filter y Reduce calcule la suma de números positivos en un arreglo y también la suma de números negativos del mismo arreglo.

const numeros = [1, -4, 12, 0, -3, 29, -150];

const positivos = numeros.filter( x => (x < 0))

const negativos = numeros.filter( x => (x > 0))

const sumaPositivos = positivos.reduce((acc, actual) => acc + actual)
const sumaNegativos = negativos.reduce((acc, actual) => acc + actual)
console.log(sumaPositivos);
console.log(sumaNegativos);