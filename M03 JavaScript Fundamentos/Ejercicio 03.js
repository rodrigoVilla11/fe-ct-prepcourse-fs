/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:
   if (x === y) {
      return true
   } else {
      return false
   }
}
console.log(sonIguales(7,7));
console.log(sonIguales(7,9));

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:

   if (str1.length == str2.length) {
      return true
   } else {
      return false
   }
}
console.log(tienenMismaLongitud("Hola","Chau"))
console.log(tienenMismaLongitud("Hola","Naranja"))

function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
   if (num < 90) {
      return true
   } else {
      return false
   }
}
console.log(menosQueNoventa(70));

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   if (num > 50) {
      return true
   } else {
      return false
   }
}
console.log(mayorQueCincuenta(52));

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   if (num%2 == 0) {
      return true
   } else {
      return false
   }
}
console.log(esPar(28));

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   if (num%2 != 0) {
      return true
   } else {
      return false
   }
}
console.log(esImpar(27));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
