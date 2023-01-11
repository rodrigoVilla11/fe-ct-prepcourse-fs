/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
}
console.log(devolverString('Hola Henry'));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}
console.log(suma(10, 7));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
console.log(resta(11, 4));

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
console.log(divide(8,2));

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
console.log(multiplica(2,5));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}
console.log(obtenerResto(10,8));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
