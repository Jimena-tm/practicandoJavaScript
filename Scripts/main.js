/*Implementar un algoritmo que reciba 2 argumentos y los sume,
 el resultado se debera imprimir en pantalla*/
function suma (a,b) {
     return a + b
 }
console.log(suma (1,2));

 /*Un estudiante realiza 4 examenes, calcular el promedio de estos*/
function notas (a,b,c,d) {
    return (a + b + c + d) / 4
}
console.log(notas (15,12,13,16));
 
/*Calcular el area de un rectangulo*/
function area (b,a) {
    return b * a
}
console.log(area (7,3));

/*Calcular el area de un triangulo*/
function triangulo (b,a) {
    return (b * a) / 2
}
console.log(triangulo (5,4));

/*Calcular el area de una circunferencia*/
function circunferencia (radio) {
  
    return Math.PI * Math.pow(radio,2);
     
    }

    console.log(circunferencia (5));


  

  



