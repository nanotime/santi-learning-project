function contarBs(cadena: string): number {
  return contarCaracter(cadena, "B");
}

console.log(contarBs("BBC")); 

function contarCaracter(cadena: string, caracter: string): number {
  let cantidad = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      cantidad++;
    }
  }
  return cantidad;
}

console.log(contarCaracter("BBQ", "B")); 