/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
return Math.max(x, y);
}
console.log(obtenerMayor(7,7))

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18) {
      return "Allowed"
   } else {
      return "Not allowed"
   }
}
console.log(mayoriaDeEdad(18));
console.log(mayoriaDeEdad(43));
console.log(mayoriaDeEdad(17));

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   switch (status) {
      case status = 1:
         return 'Online'
      case status = 2:
         return 'Away'
      default:
         return 'Offline'
   }
}
console.log(conection(1));
console.log(conection(2));
console.log(conection());

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
  switch (idioma) {
   case idioma = 'aleman':
      return 'Guten Tag!'
   case idioma = 'mandarin':
      return 'Ni Hao!'
   case idioma = 'ingles':
      return 'Hello!'
   default:
      return 'Hola!'
  }
}
console.log(saludo('aleman'));
console.log(saludo('mandarin'));
console.log(saludo('ingles'));
console.log(saludo('aaaaa'));
console.log(saludo(''));

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color) {
      case color = "blue":
         return "This is blue"
      case color = "red":
         return "This is red"
      case color = "green":
         return "This is green"
      case color = "orange":
         return "This is orange"
      default:
         return "Color not found"
   }
}
console.log(colors("blue"));
console.log(colors("red"));
console.log(colors("green"));
console.log(colors("orange"));
console.log(colors("white"));


function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num === 10 || num === 5) {
      return true
   } else {
      return false
   }
}
console.log(esDiezOCinco(10));
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(8));

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num > 20 && num < 50) {
      return true
   } else {
      return false
   }
}
console.log(estaEnRango(30));
console.log(estaEnRango(10));
console.log(estaEnRango(433));

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   if (Number.isInteger(num)) {
      return true
   } else {
      return false
   }
}
console.log(esEntero(0.8));
console.log(esEntero(1));
console.log(esEntero(-10));

function fizzBuzz(num) {
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // De lo contrario, retorna el número.
   // Tu código:
 if (num % 5 == 0 && num % 3 == 0) {
   return 'fizzbuzz'
 } else {
   if (num % 5 == 0) {
      return 'buzz'
   } else {
      if (num % 3 == 0) {
         return 'fizz'
      } else {
         return num
      }
   }
 }
}
let num = 0;
while(num < 30) {
   num = num + 1;
      console.log(fizzBuzz(num));
   };

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si alguno de los argumentos es cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if (num1 > num2 && num1 > num3 && num1 > 0) {
      return 'Numero 1 es mayor y positivo'
   } else {
      if (num1 < 0 || num2 < 0 || num3 < 0) {
         return 'Hay negativos'
      } else {
         if (num3 > num1 && num3 > num2) {
            return num3 + 1
         } else{
            if (num1 === 0 || num2 === 0 || num3 === 0) {
               return 'Error'
            } else{
               return false
            }
         }
      }
   }
}

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if (num ==  0 || num == 1 || num == 4 || num < 0) {
      return false
   }
   for (let index = 2; index < num / 2; index++) {
      if (num % index == 0) {
         return false
      }
   }
   return true
}
console.log(esPrimo(72))

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor === true) {
      return 'Soy verdadero'
   } else{
      return "Soy falso"
   }
}
console.log(esVerdadero(true));
console.log(esVerdadero(false));

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   if (num.toString().length < 3 || num.toString().length > 3) {
      return false
   } else {
      return true
   }
}
console.log(tieneTresDigitos(13))

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let iterar = 0;
   do {
      num += 5;
      iterar++
   } while (iterar <= 7);
   return num;
}
console.log(doWhile(5));
console.log(doWhile(100));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
