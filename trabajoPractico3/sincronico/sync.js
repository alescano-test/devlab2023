//* Eventos

//? Leer contenido de archivo
import { readFileSync } from 'node:fs'
const contenido = readFileSync('archivo.txt')
console.log(contenido.toString());


//? Verificar si el archivo existe

import { accessSync} from 'node:fs';

try {
  accessSync('archiv2.txt');
  console.log('can read/write');
} catch (err) {
  console.error('no access!');
}

//? Agregar datos a un archivo

import { appendFileSync } from 'node:fs';

try {
  appendFileSync('archivo.txt', 'Datos agregados');
  console.log('Contenido agregado');
} catch (err) {
  /* Handle the error */
}


try {
    appendFileSync('archivo3.txt', ' con 2 trycach');
    console.log('Contenido agregado');
  } catch (err) {
    /* Handle the error */
  }

