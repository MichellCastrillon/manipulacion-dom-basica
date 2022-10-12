// var numero = 1;
// switch(numero){
//     case 1:
//         console.log("Soy uno")
//         break;
//     case 10:
//         console.log("Soy un 10")
//         break;
//     case 100:
//         console.log("soy un 100")
//         break;
//     default:
//         console.log("No soy nada")
// }

//=======================RETO PIEDRA-PAPEL O TIJERA CON SWITCH===================
//Primero defino variables
var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";
//Delcaro funcion
juego(op1,op1);
//Defino la funcion
function juego(user,cpu){
    switch(true){
        case (user==op1 && cpu ==op2):
            console.log(op2+" le gana a "+op1+" gana la cpu")
            break;
        case (user ==op1 && cpu == op3):
            console.log(op1+" le gana a "+op3+" gana el user")
            break;
        case (user==cpu):
            console.log("Empate")
            break;
        default:
            console.log("ingrese opciones validas")
    }
} 

