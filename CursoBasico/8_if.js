// var saludo = false;
// if(saludo==true) {
//     console.log("Hola");
// } 

// else if(saludo==false){
//     console.log("chao");
// }

// var edad = 17;
// if(edad===18){
//     console.log("Puedes votar, será tu 1a vez")
// } else if(edad > 18){
//     console.log("Puedes votar de nuevo")
// } else {
//     console.log("Eres menor de 18")
// }

//=============OPERADOR ternario===============================
// reduce un condicional en una sola linea y la estrucyura es:
//condition ? true : false;

// edad===18 ? console.log("hola") : console.log("chao")

//======================RETO============================

//hacer juego de piedra papel o tijera

//Defino variables
//variables piedra papel o tijera de la maquina
var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";

//Defino la funcion a usar en el juego
// juegoPiePapTije(opc2,opc1);


// function juegoPiePapTije(user,cpu){
//     if(user!=cpu){
//         if(user === opc1 && cpu === opc1){
//             console.log("empate");
//         } else if(user === opc1 && cpu === opc2){
//             console.log(opc1+" le gana a "+opc2+" Gana el usuario")
//         } else if(user === opc1 && cpu === opc3){
//             console.log(opc1+" le gana a "+opc3+" Gana el usuario")
//         }else if(user === opc2 && cpu === opc1){
//             console.log(opc2+" le gana a "+opc1+" Gana el usuario")
//         }
//     } else{
//         console.log("Son iguales")
//     }
// }

var miFuncion = function(user,cpu){
    if(user!=cpu){
        if(user === opc1 && cpu === opc1){
            console.log("empate");
        } else if(user === opc1 && cpu === opc2){
            console.log(opc1+" le gana a "+opc2+" Gana el usuario");
        } else if(user === opc1 && cpu === opc3){
            console.log(opc1+" le gana a "+opc3+" Gana el usuario");
        }else if(user === opc2 && cpu === opc1){
            console.log(opc2+" le gana a "+opc1+" Gana el usuario");
        }
    } else{
        console.log("Son iguales");
    }
}
//Si es una funcion anonima se debe ingresar los parametros luego de la funcion
miFuncion(opc2,opc1);