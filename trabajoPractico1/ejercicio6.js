//? 6- Teniendo un arreglo de objetos con nombre y edad de personas realice lo siguiente:

//! Entrada:
const personas = [
  { nombre: "Juan", edad: 13 },
  { nombre: "Marcos", edad: 56 },
  { nombre: "Maria", edad: 45 },
]

//* a- Empleando Map genere un arreglo con solo los nombres de las personas

const nombres = personas.map( persona => {
    return persona.nombre;
} )
console.log(nombres);

//? Salida: nombres = [ "Juan", "Marcos", "Maria" ]

//* b- Empleando Map genere un arreglo con solo las edades de las personas.

const edades = personas.map( persona => {
    return persona.edad;
} )
console.log(edades);

//? Salida: edades = [ 13, 56, 45 ]

//* c- Empleando Some indique si hay algún menor de edad

const menorDeEdad = personas.some((persona) => {
    return persona.edad >= 18;
})
console.log(menorDeEdad);

//* d- Empleando Map y Filter genere un arreglo con los nombres de las personas mayores de edad.

const mayoresDeEdad = personas.filter(persona => {
    if(persona.edad >= 18){
        return persona
    }
 })

const nombreMayoresDeEdad = mayoresDeEdad.map(persona => {
    return persona.nombre
})

console.log(nombreMayoresDeEdad);


//? Salida: nombres = [ "Marcos", "Maria" ]