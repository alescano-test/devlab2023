//? 7- Teniendo un arreglo con nombre y notas de alumnos y empleando Map, Reduce y Filter encuentre aquellos alumnos cuyo promedio de notas sea mayor a 80 puntos.

const estudiantes = [
  { nombre: "Alicia", notas: [90, 65, 72] },
  { nombre: "Adrian", notas: [75, 60, 55] },
  { nombre: "Carlos", notas: [60, 45, 85] },
  { nombre: "David", notas: [100, 100, 100] },
];

const promedioAlumnos = estudiantes.map( estudiante => {
  const prom = estudiante.notas.reduce((acc, nota)=> {
    acc = acc+nota
    return acc
  })
  const alumno = { nombre : estudiante.nombre, notas : estudiante.notas = prom }
  return alumno
}).reduce((estudianteMayorProm, estudianteActual) => {
  return estudianteActual.notas > estudianteMayorProm.notas ? estudianteActual : estudianteMayorProm
});

console.log(promedioAlumnos)
//console.log(mayorPromedio);