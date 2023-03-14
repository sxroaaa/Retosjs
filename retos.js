let op= prompt("1.si quieres saber si un numero es positivo o negativo \n2.para saber que numero es mayor o menor entre dos numeros \n 3.para conocer el numero mayor y menor entre 3 numeros positivos");
switch (op){
    case "1":
        let numero=prompt('Digite un numero');
        if(numero>0){
            document.write('el numero es positivo');
        }else {
            document.write('el numero es negativo');
        }
        break;
        case "2":
            let num1=prompt('Digite el primer numero');
            let num2=prompt('Digite el segundo numero');
            if(parseInt (num1)> parseInt(num2)){
                document.write(num1 + ' es mayor que ' +num2);
            }else{
                document.write(num2 +' es mayor que ' +num1);
            } 
        break;
        case "3":
            var lista=new Array;
           
            for (i=0; i<3; i++){
                lista[i]=parseInt(prompt("Ingrese un numero positivo"));
                
            }
           let contador=0;
           var mayor=0;
           var menor=0;
         
           while(contador<3){
            if(lista[contador]>mayor){
                mayor=lista[contador];
              
            }
            contador++;
           }
           document.write("El numero mayor es " +mayor);



}