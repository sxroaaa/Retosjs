promedio=0;
nombre=prompt("Ingresa tu nombre");
preguntas=parseInt(prompt("numero de preguntas"));
Rcorrectas=parseInt(prompt("numero de respuestas correctas")); 
promedio=(Rcorrectas/preguntas)*100;
if (promedio>=90){
    document.write(nombre + " esta en un nivel superior");
}else if(promedio>=75 && promedio<90){
    document.write(nombre+ "esta en un nivel medio ");
}else if (promedio>=50 && promedio<74){
    document.write(nombre+ " esta en un nivel regular");
}else if(promedio<50){
    document.write(nombre + "esta fuera de nivel")
}