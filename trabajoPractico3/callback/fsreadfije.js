import { readFile } from "node:fs";

readFile("./archivo.txt", (err, data) => {
  if (err) {console.error("\n Se produjo un error!", err)
  throw err
}
  console.log(data.toString());
});
console.log("El programa sigue");


