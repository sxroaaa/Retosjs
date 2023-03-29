var suma=0;

for(i=0; i<10; i++){
  numero=parseInt(prompt("Digite un numero"));
  document.write("\n" + numero);
  if(i>4){
      
       suma=suma+numero;
    }
    
}
  document.write("<br>")
  document.write("la suma de los ultimos 5 digitos es: " + suma);