//2- Con Filter genere tres arreglos que contengan los números positivos, negativos y ceros de unarreglo con números.

const numeros = [1, -4, 12, 0, -3, 29, -150];

const positivos = numeros.filter((x) => x > 0);
const negativos = numeros.filter((x) => x < 0);
const ceros = numeros.filter((x) => x == 0);

console.log(
  `Positivos [${positivos}] Negativos [${negativos}] Ceros [${ceros}]`
);
