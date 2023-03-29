
 let op = prompt(
   "1.reto de la abuela\n 2.si quieres saber si un numero es positivo o negativo\n 3.para saber que numero es mayor o menor entre dos numeros \n 4.para conocer el numero mayor y menor entre 3 numeros positivos"
 );
switch (op) {
  case "1":
    alert(
      "Biemvenido al reto de la abuela!!, ayudale a saber a cuantos grados centigrados debe preparar su receta"
    );
    var F = prompt("ingrese los grados farenheit que indica la receta:");
    var C = (F - 32) / 1.8;
    document.write(
      "Los grados Centigrados a los que tiene que preparar la receta son " + C
    );
    console.log(
      "Los grados Centigrados a los que tiene que preparar la receta son " + C
    );
    break;
  case "2":
    let numero = prompt("Digite un numero");
    if (numero > 0) {
      document.write("el numero es positivo");
    } else {
      document.write("el numero es negativo");
    }
    break;
  case "3":
    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");
    if (parseInt(num1) > parseInt(num2)) {
      document.write(num1 + " es mayor que " + num2);
    } else {
      document.write(num2 + " es mayor que " + num1);
    }
    break;
  case "4":
    var lista = new Array();

    for (i = 0; i < 3; i++) {
      lista[i] = parseInt(prompt("Ingrese un numero positivo"));
    }
    let contador = 0;
    var mayor = Math.max(...lista);
    var menor = Math.min(...lista);
    contador++;
    document.write ("El numero mayor es " + mayor + " y el numero menor es " + menor);
  }
   /* while (contador < 3) {
      if (lista[contador] > mayor) {
        mayor = lista[contador];
      }
    }
    contador++;
    }*/
