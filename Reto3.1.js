var num1=parseInt(prompt("Digite el primer numero"));
var num2=parseInt(prompt("Digite el segundo numero"));

document.write("Caluladora");
document.write("<br>")
var op=prompt("Elija la operacion que desea realizar\n 1.Suma \n 2. resta \n 3. multiplicacion \n4. Division");

switch(op){
    case "1":
    resultado= num1+num2;
    document.write("El resultado de la suma es " +resultado);
    break;
    case "2":
    resultado=num1-num2;
    document.write("El resultado de la resta es " +resultado);
    break;
    case "3":
    resultado=num1*num2;
    document.write("El resultado de la multiplicacion es " +resultado);
    break;
    case "4":
    resultado=num1/num2;
    document.write("El resultado de la division es " +resultado);
    break;
}