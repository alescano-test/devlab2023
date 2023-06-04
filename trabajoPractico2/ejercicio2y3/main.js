import os from "node:os";
import prettyBytes from "pretty-bytes";
import colors from "colors"
const free_memory = prettyBytes(os.freemem());
//! Ouput
console.log(`Tenés: ${free_memory} de memoria RAM disponibles.`.rainbow)