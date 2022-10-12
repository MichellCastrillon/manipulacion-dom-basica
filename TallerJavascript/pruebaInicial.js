//Declaro las variables
// let Nombre;
// let Apellido;
// let NombreDeUsuarioEnPlatzi;
// let Edad;
// let CorreoElectrónico;
// let MayorDeEdad;
// let DineroAhorrado;
// let Deudas;
// let DineroReal;
// //Inicializovariables
// Nombre = "Michell";
// Apellido ="Castrillón Sepulveda";
// DineroAhorrado =200000
// Deudas=50000
// DineroReal=DineroAhorrado-Deudas

// console.log(Nombre+" "+Apellido+" El dinero real es: "+DineroReal);

//function prueba (parametro1,parametro2){

//}
//cuando llamo la funcion
//prueba(argumento1,argumento2)

//=====================CODIGO==========================
//Declaro variables
// const name = "Juan David";
// const lastname = "Castro Gallego";
// const nickname = "juandc";
// //Declaro funcion
// completeName(name,lastname,nickname)

// function completeName(name,lastname,nickname){
//     return console.log(`Mi nombre es ${name}+${lastname}, pero prefiero que me digas ${nickname}.`);
// }

//===========================codigo2====================
// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

// const tipoDeSuscripcion = "Basic";

// if (tipoDeSuscripcion == "Free"){
//     console.log("Solo puedes tomar los cursos gratis");
// }else if(tipoDeSuscripcion == "Basic"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }else if(tipoDeSuscripcion == "Expert"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }else if(tipoDeSuscripcion == "ExpertPlus"){
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// } else{
//     console.log("Plan no valido");
// }

//==>solo con condicional if
// if (tipoDeSuscripcion == "Free"){
//     console.log("Solo puedes tomar los cursos gratis");
// }else if(tipoDeSuscripcion == "Basic"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }else if(tipoDeSuscripcion == "Expert"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }else if(tipoDeSuscripcion == "ExpertPlus"){
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// } else{
//     console.log("Plan no valido");
// }

// let planes = ["Free","Basic","Expert","Expertplus"]
// for (var i=0; i < planes.length;i++){
//     if (planes[i] == "Free"){
//         console.log("Solo puedes tomar los cursos gratis");
//     }else if(planes[i] == "Basic"){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     }
// }
// let i=0;
// while (i < 5){
//     console.log("El valor de i es: " + i);
//     i=i+1;
// }

// j=10
// while  (j >= 2) {
//     console.log("El valor de j es: " + j);
//     j=j-1
// }
// let numero1;
// let numero2;
// let entradaUsuario;
// let sumaTrue;
// numero1 = prompt("Enter number one: ");
// numero2 = prompt("Enter number two: ");
// sumaTrue = 4;
// entradaUsuario = prompt("Cuál es el reusltado de sumar 2+2?: ")

// if (entradaUsuario==sumaTrue){
//     console.log("Felicitaciones "+ entradaUsuario + " es el valor de la suma")
// }else{
//     console.log(entradaUsuario + " no es el valor de la suma")
// }

// let respuesta;
// while (respuesta!=4){
//     let pregunta = prompt("cuanto es 2+2");
//     respuesta = pregunta;
// }

var array =["first","second","third","fourth"];
var objeto = {
    marca:"toyota",
    modelo:"ask1",
    año:2000
}
object(objeto);
// recorrerArray(array);
// recorrerArray2(array)

// function recorrerArray (arrayIn){
//     console.log(arrayIn[0])
// }

// function recorrerArray2(arrayIn){
//     for (i=0;i<=arrayIn.length;i++){
//         console.log(arrayIn[i])
//     }
// }

//===================Recorrer un objeto=============================
function object (objetos){
    for (let key in objetos){
        console.log(objetos[key])
    }
}