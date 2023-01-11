/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0]
}
console.log(devolverPrimerElemento([10,20,30,40,50]))

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1]
}
console.log(devolverUltimoElemento([10,20,30,40,50]))

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
console.log(obtenerLargoDelArray([10,20,30,40,50]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
  var incrementado = array.map(function(num){
   return num + 1
  })
  return incrementado
}
console.log(incrementarPorUno([1,2,3,4,5]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}
console.log(agregarItemAlFinalDelArray([10,20,30,40,50],60))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}
console.log(agregarItemAlComienzoDelArray([10,20,30,40,50],0))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabrasJuntas = palabras.join(' ');
   return palabrasJuntas
}
console.log(dePalabrasAFrase(['Hello', 'World!']))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   if (array.includes(elemento)) {
      return true
   } else {
      return false
   }
}
console.log(arrayContiene([10,20,30,40,50],70))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let total = 0;
for (const num of arrayOfNums) {
   total += num;
   }
  return total
}
console.log(agregarNumeros([10,20,30,40,50]));


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let total = 0
   for (const num of resultadosTest) {
      total += num
   }
   newTotal = total / resultadosTest.length
   return newTotal
}
console.log(promedioResultadosTest([10,20,30,40,50]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max.apply(null, arrayOfNums);
}
console.log(numeroMasGrande([10,20,30,40,50]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let multipli = 1;
  if (arguments.length === 0) {
   return 0
  } else if (arguments.length === 1){
   return arguments[0];
  } else {
   for (let i = 0; i < arguments.length; i++) {
      multipli = multipli * arguments[i];
   }
  }
  return multipli
}
console.log(multiplicarArgumentos([2,3,4]))


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  let newArray = array.filter(mayor => mayor > 18);
  return newArray.length;
}
console.log(cuentoElementos([10,10,18,21]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
  if (numeroDeDia === 6 || numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5) {
    return 'Es dia laboral'
  }
  if ( numeroDeDia === 1 || numeroDeDia === 7) {
   return 'Es fin de semana'
  }
}
console.log(diaDeLaSemana(1));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let strings = num.toString().split('');
   console.log(strings)
   let newStrings = strings.filter( nine => nine [0] == 9);
   if (newStrings[0] == 9) {
      return true
   } else {
      return false
   }
}
console.log(empiezaConNueve([578]));
console.log(empiezaConNueve([978]));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
 return array.every(e => array[0] == e)
}
console.log(todosIguales([1,1,1,1,1]));
console.log(todosIguales([1,1,1,2,1]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrayResultado = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
         arrayResultado.push(array[i]);
      }
   }
   if (arrayResultado.length === 3) {
      return arrayResultado
   } else {
      return 'No se encontraron los meses pedidos'
   }
}
console.log(mesesDelAño(['Enero','Marzo','Febrero','Noviembre']))
console.log(mesesDelAño(['NotOK']))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array = []
   for (let i = 0; i <= 10; i++) {
      tabla = 6 * i
      array.push(tabla)
   }
   return array
}
console.log(tablaDelSeis())

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayorAnum = array.filter(e => e > 100 && e <= 200);
   return mayorAnum
}
console.log(mayorACien([1,100,200,150,165, 2054]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let array = [];
   total = num
   for (let i = 0; i < 10; i++) {
      total = total + 2;
      if (total === i) {
         break;
      } else {
         array.push(total);
      }
      if (array.length < 10) {
            return 'Se interrumpio la ejecucion';
      } else if (array.length === 10){  
            return array;
      }
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let array = [];
   total = num
   for (let i = 1; i < 11; i++) {
      if (i === 5) {
         continue;
      } else {
         total = total + 2;
         array.push(total);
      }
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
