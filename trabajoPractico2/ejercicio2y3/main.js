import os from "node:os";
import prettyBytes from "pretty-bytes";
import colors from "colors"
const free_memory = prettyBytes(os.freemem());
const cpu_architecture = os.arch();
const hostName = os.hostname()

//! Ouput
console.log(`La arquitectura de tu procesador es ${cpu_architecture}`.bgBlue);
console.log(`Tenés: ${free_memory} de memoria RAM disponibles.`.rainbow);
console.log(`Tenés: ${hostName} de memoria RAM disponibles.`.bgMagenta);