
// alert("el js esta ligado")

// EJERCICIO 1

// let bel = prompt("¿Eres Bellisimo?");
// if (bel =="si" || "SI"){
//     console.log("Ciertamente")
// }else{
//     console.log("No te creo")
// };

// EJERCICIO 2

// let num = parseInt ( prompt ("Indica un numero para saber si es divisible por 2"));
// if (num % 2 == 0){
//     console.log(num + " es divisible entre 2")
// }else{
//     console.log(num + " No es divisible entre 2")
// };

// EJERCICIO 3

// let num2 = parseInt ( prompt ("Indica el numero para saber si es par o impar"));
// if (num2 % 2 == 0){
//     alert("PAR")
// }else{
//     alert("IMPAR")
// };

// // EJERCICIO 4

// let num3 = parseInt ( prompt ("Indique un numero para la RIFA!!!!!!: "));
// if (num3 == "1000"){
//     console.log("GANASTE UN PREMIO!!!!!!!!!!")
// }else{
//     console.log("LO SENTIMOS, SIGUE PARTICIPANDO")
// };

//EJERCICIO 5

// alert("programa para comparar dos numeros")
// let nume1 = parseInt ( prompt (" Indica el primer numero para saber si es Mayor o Menor: " ));
// let nume2 = parseInt ( prompt (" Indica el segundo numero para realizar la comparación: "));
// if (nume1 >= nume2){
//     alert("el numero:  " +nume1 + "  es mayor que el numero:  "+nume2 )
// }else{
//     alert("el numero:  " +nume2 + "  es mayor que el numero:  "+nume1)
// };

//EJERCICIO 6

// alert("programa para comparar TRES numeros")
// let nume1 = parseInt(prompt(" Indica el PRIMER numero para realizar la comparación: "));
// let nume2 = parseInt(prompt(" Indica el SEGUNDO numero para realizar la comparación: "));
// let nume3 = parseInt(prompt(" Indica el TERCER numero para realizar la comparación: "));
// if (nume1 >= nume2) {
//     if (nume1 >= nume3) {
//         alert("el numero mayor es: " +nume1);
//     } else { alert("el numero mayor es: " +nume3);} 
// }    
// else {if (nume2 >= nume3) {
//         alert("el numero mayor es el: " + nume2);
//     }
//     else {
//         alert("el numero mayor es el numero: " + nume3)
//     } 
//     }

// EJERCICIO 7

// let dia = prompt("indique el dia de la semana:  ")

// switch
// (dia) {

//     case
//         "lunes":
//         alert("Hello lunes")
//         break;

//     case
//         "martes":
//         alert("Welcome martes")
//         break;

//     case
//         "miercoles":
//         alert("Hello miercoles")
//         break;

//     case
//         "jueves":
//         alert("Welcome jueves")
//         break;

//     case
//         "viernes":
//         alert("Hello viernes")
//         break;

//     case
//         "sabado":
//         alert("Welcome sabado")
//         break;
//     case
//         "domingo":
//         alert("Hello domingo")
//         break;
// }

// EJERCICIO 8

// alert("programa para verificar notas")
// let nota = parseInt(prompt(" Indica la calificacion, numero entre 1 y 10 : "));
// if(nota<=10 && nota>=1){
//     if(nota<6){
//         alert("Reprobado")
//     }else if (nota<=8){
//         alert("Regular")
//         }else if(nota>9){
//             alert("Excelente")
//              }else{alert("Bien")}
// }
// else{alert("el numero digitado esta fuera del rango permitido")}

// EJERCICIO 9 

// let hel = prompt("indique acompañante de su helado:  ")

// switch
// (hel){

//     case
//         "sin topping":
//         alert("el valor de su helado sin topping es 50 MXN");
//         break;

//     case
//         "topping oreo":
//         alert("el valor de su helado con topping de oreo es 60 MXN");
//         break;

//     case
//         "topping KitKat":
//         alert("el valor de su helado con topping de KitKat es 65 MXN");
//         break;

//     case
//         "topping brownie":
//         alert("el valor de su helado con topping de brownie es 70 MXN");
//         break;

//     default:
//         alert("no tenemos ese topping, lo sentimos");
//         alert("el valor de su helado es 50 MXN")
//         break;

// }

// EJERCICIO 10

// alert("programa para calcular matricula")
// alert(" Indica el nivel del programa /n 1.Course $4999MXN /n 2.Carrera $3999MXN /n 3.Master $2999");
// let niv = parseInt(prompt("digite el nivel a realizar"));
// switch (niv) {
//     case 1:
//         var pago = 4999;
//         alert(`su pago sera por: ${pago}`);
//         var mes = 2;
//         break;
//     case 2:
//         var pago = 3999;
//         alert(`su pago sera por: ${pago}`);
//         var mes = 6;
//         break;
//     case 3:
//         var pago = 2999;
//         alert(`su pago sera por: ${pago}`);
//         var mes = 12;
//         break;
//     default:
//         break;
// }
// alert(`posee ud algun tipo de Beca /n 1.Facebook  20% /n 2.google 15% /n 3.jesua 50% /n 4.Sin descuento`);
// let beca = parseInt(prompt(" digite el numero de Beca"));
// switch (beca) {
//     case 1:
//         var adic = (pago * 20) / 100;
//         alert(`su descuento sera por  ${adic}`);
//         break;
//     case 2:
//         var adic = (pago * 15) / 100;
//         alert(`su descuento sera por  ${adic}`);
//         break;
//     case 3:
//         var adic = (pago * 50) / 100;
//         alert(`su descuento sera por  ${adic}`);
//         break;
//     case 4:
//         var adic = 0;
//         alert("usted no cuenta con descuento ")
//         break;
//     default:
//         break;
// }
// alert(`el valor a pagar total es: ${pago - adic} por ${mes} meses`);

alert("programa para calcular matricula")
alert(" Indica el nivel del programa /n 1.Course $4999MXN /n 2.Carrera $3999MXN /n 3.Master $2999");
let niv = parseInt(prompt("digite el nivel a realizar"));
let pago = null;
let mes = null;
switch (niv) {
    case 1:
        pago = 4999;
        alert(`su pago sera por: ${pago}`);
        let mes = 2;
        break;
    case 2:
        pago = 3999;
        alert(`su pago sera por: ${pago}`);
        mes = 6;
        break;
    case 3:
        pago = 2999;
        alert(`su pago sera por: ${pago}`);
        mes = 12;
        break;
    default:
        break;
}
let adic = null;
alert(`posee ud algun tipo de Beca /n 1.Facebook  20% /n 2.google 15% /n 3.jesua 50% /n 4.Sin descuento`);
let beca = parseInt(prompt(" digite el numero de Beca"));
switch (beca) {
    case 1:
        adic = (pago * 20) / 100;
        alert(`su descuento sera por  ${adic}`);
        break;
    case 2:
        adic = (pago * 15) / 100;
        alert(`su descuento sera por  ${adic}`);
        break;
    case 3:
        adic = (pago * 50) / 100;
        alert(`su descuento sera por  ${adic}`);
        break;
    case 4:
        adic = 0;
        alert("usted no cuenta con descuento ")
        break;
    default:
        break;
}
alert(`el valor a pagar total es: ${pago - adic} por ${mes} meses`);