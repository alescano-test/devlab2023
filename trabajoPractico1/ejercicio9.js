//! Teniendo un arreglo con nombre, salario y área de empleados y empleando Map, Reduce mostrar el área con mayor salario promedio

const empleados = [
  { nombre: "Juan", salario: 50000, departamento: "Ventas" },
  { nombre: "Juana", salario: 60000, departamento: "Compras" },
  { nombre: "Jose", salario: 55000, departamento: "Ventas" },
  { nombre: "Sofia", salario: 75000, departamento: "Compras" },
  { nombre: "Ruben", salario: 65000, departamento: "Ventas" },
  { nombre: "Emilia", salario: 80000, departamento: "Compras" },
  { nombre: "David", salario: 70000, departamento: "Ventas" },
];

// Paso 1: Calcular la suma de los salarios para cada área
const salariosPorArea = empleados.reduce((salarios, empleado) => {
  if (!salarios[empleado.departamento]) {
    // Si el departamento no existe en el objeto "salarios", se crea un arreglo vacío para ese departamento
    salarios[empleado.departamento] = [];
  }
  // Se agrega el salario del empleado al arreglo correspondiente al departamento en "salarios"
  salarios[empleado.departamento].push(empleado.salario);
  console.log(salarios[empleado.departamento]);
  return salarios;
}, {});

// Paso 2: Calcular el promedio de salarios para cada área
const promediosPorArea = Object.entries(salariosPorArea).map(([area, salarios]) => {
  // Se utiliza el método "reduce" para sumar los salarios de cada departamento
  const sumaSalarios = salarios.reduce((suma, salario) => suma + salario, 0);
  // Se calcula el promedio dividiendo la suma de salarios por la cantidad de empleados en ese departamento
  const promedioSalarios = sumaSalarios / salarios.length;
  return { area, promedioSalarios };
});
console.log(promediosPorArea);

// Paso 3: Encontrar el promedio más alto y su correspondiente área
const areaConMayorPromedio = promediosPorArea.reduce((areaMayor, areaActual) => {
  if (!areaMayor || areaActual.promedioSalarios > areaMayor.promedioSalarios) {
    // Si no hay un área con mayor promedio o el promedio actual es mayor, se actualiza el área con el promedio más alto
    return areaActual;
  }
  return areaMayor;
}, null);

console.log(areaConMayorPromedio);