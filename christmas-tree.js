// Altura del arbol sin la estrella
const treeHeight = 9; 
// Los ceros que estaran en la ultima fila
const treeWidth = treeHeight * 2 - 1;

// Se coloca la estrella
console.log('*'.padStart( treeHeight ));

for (let i = 1; i <= treeHeight; i++) {
  // Num actual * 2 - 1 para obtener numeracion de 2 en 2 a partir del 1
  const zeros = "0".repeat( i * 2 - 1 );
  // Añade espacios antes de los ceros de acuerdo al ancho del arbol
  console.log( zeros.padStart(( treeWidth + zeros.length ) / 2) );
}
