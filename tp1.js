/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(data) {
  const valuesObject = Object.values(data);
  return valuesObject;
}

/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(array) {
  const objectEmpy = {};

  array.forEach((element) => {
    objectEmpy[element] = element.length;
  });

  return objectEmpy;
}

/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {
  const object1Keys = Object.keys(objeto1);
  const object2Keys = Object.keys(objeto2);
  const keysEcuals = [];

  object1Keys.forEach((element) => {
    if (object2Keys.includes(element)) {
      keysEcuals.push(element);
    }
  });

  return keysEcuals;
}

// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log(extractValues({ a: 1, b: 2, c: 3 }));
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log(findKeysInCommon({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }));
}

main();
