import { access, appendFile } from 'node:fs'

access('./archivo.txt', (err) => {
    if (err) {
        console.log('El archivo no existe');
    } else {
        console.log('El archivo si existe');
        appendFile(.'/archivo3.txt, "mueva linea\n")
    }
})

console.log();