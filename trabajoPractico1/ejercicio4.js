//4- Empleando Reduce transformar un arreglo con palabras a un objecto que indique cuantas veces se repite la palabra.

const palabras = ["perro", "gallina", "gato", "perro", "gallina", "gallina", "conejo"];

const contadorAnimales = palabras.reduce( (acumulador, valorActual) => {
    if (acumulador[valorActual]) {
        acumulador[valorActual] += 1;
    } else {
        acumulador[valorActual] = 1
    }
    return acumulador
}, {})

console.log(contadorAnimales);

