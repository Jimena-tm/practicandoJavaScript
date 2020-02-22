// /*1. Implementar un algoritmo que reciba 2 argumentos y los sume,
//  el resultado se debera imprimir en pantalla*/
// function suma (a,b) {
//      return a + b
//  }
// console.log(suma (1,2));

//  /*2. Un estudiante realiza 4 examenes, calcular el promedio de estos*/
// function notas (a,b,c,d) {
//     return (a + b + c + d) / 4
// }
// console.log(notas (15,12,13,16));
 
// /*3. Calcular el area de un rectangulo*/
// function area (b,a) {
//     return b * a
// }
// console.log(area (7,3));

// /*4. Calcular el area de un triangulo*/
// function triangulo (b,a) {
//     return (b * a) / 2
// }
// console.log(triangulo (5,4));

// /*5. Calcular el area de una circunferencia*/
// function circunferencia (radio) {
//     return Math.PI * Math.pow(radio,2);
//     }
// console.log(circunferencia (5));

// /*6. Determinar el sueldo semanal de un trabajador 
// basandose en sus horas trabajadas y su salario de hora hombre*/
// let horas = parseFloat(prompt("Por favor ingresar la cantidad de horas semanales que trabaja: "));
// let sueldo =parseFloat(prompt("Ingresar el sueldo por hora del trabajador"))
// function salario (horas,sueldo) {
//     return horas * sueldo
// }
// console.log("El salario semanal del trabajador es ", salario (horas,sueldo));

// /*7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. 
// Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella 
// generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, 
// determinando cuántas pulgadas debe pedir con base en los metros que requiere. Represéntelo 
// mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)*/
// let metros = parseFloat(prompt("Por favor ingresar la cantidad de metros de tela: "));
// function PedidoTela(metros) {    
//     return  metros / 0.0254    
// }
// console.log("La cantidad de pulgadas que debe pedir es: ", PedidoTela(metros));

// /*8.Una empresa importadora desea determinar cuántos dólares puede adquirir con equis 
// cantidad de dinero peruano*/
// let soles = parseFloat(prompt("Por favor ingrese cantidad de soles a convertir a dolares"));
// function CantidadDolares(soles) {
//     dolares = soles / 3.4
//     return dolares
// }
// console.log("La cantidad de dólares que puedas comprar es: ", CantidadDolares(soles));

// /*9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
// pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron*/
// let año =parseFloat(prompt("Ingrese año de nacimiento del postulante"))
// function Edad(año) {
//     edad_postulante = 2020 - año
//     return edad_postulante
// }
// console.log("La edad del postulante es: ", Edad(año));

/* 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y
 la edad de la persona de menor edad.CORREGIR*/
 let personas = [
    {
      nombre: prompt("Ingrese el nombre de la primera persona"),
      edad: parseFloat(prompt("Ingrese la edad"))
    },
    {
      nombre: prompt("Ingrese el nombre de la segunda persona"),
      edad: parseFloat(prompt("Ingrese la edad"))
    },
    {
      nombre: prompt("Ingrese el nombre de la tercera persona"),
      edad: parseFloat(prompt("Ingrese la edad"))
    }
  ];
  
  let edadMenor = personas[0].edad;
  for (let index = 0; index < personas.length; index++) {
      if (edadMenor > personas[index].edad) {
          edadMenor = personas[index].edad
      }   
  }

  console.log(edadMenor)




    
  






  



