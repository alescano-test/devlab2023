import {readFile} from 'node:fs/promises';

const contenido = await readFile('archivo.txt')
console.log(contenido.toString())