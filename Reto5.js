/*while(saldoActual<0){
    /*saldoActual=0;
    numeroCuenta=prompt("ingrese el numero de cuenta");
    NombreCliente=prompt("ingrese el nombre del cliente");

}*/
var saldoFinal=0;

do{
    document.write("<br>");
    numeroCuenta=prompt("ingrese el numero de cuenta");
    NombreCliente=prompt("ingrese el nombre del cliente");
    saldoActual=parseInt(prompt("ingrese su saldo actual"));
   
 
    if(saldoActual>0){
        saldoFinal=saldoFinal+saldoActual;
       document.write( "El numero de cuenta es " +numeroCuenta + " El nombre del cliente es: " +NombreCliente + " El estado de cuenta es: Acredor" ); 

      
    }else if(saldoActual==0){
        document.write("El numero de cuenta es " + numeroCuenta +" El nombre del cliente es: " +NombreCliente +" El estado de cuenta es: Nulo" );
    }
    else if (saldoActual <0) {
       document.write("El numero de cuenta es " +numeroCuenta + " El nombre del cliente es: " + NombreCliente +" El estado de cuenta es: Deudor");
     }      

}while(saldoActual>=0);


document.write("<br>");
document.write("Su saldo final es: " +saldoFinal);                                                                                                                                                                                                        