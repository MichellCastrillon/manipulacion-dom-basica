var frutas = ["manzanas","peras"];
// console.log(frutas.length);
// console.log(frutas[1]);

//agregar elementos al final del array
var masFrutas = frutas.push("melones");
// console.log(frutas);

//Eliminar el ultimo elementode un array
var ultimo = frutas.pop("melones");

//Agregar un nuevo valor al inicio
var nuevaLongitud = frutas.unshift("Bananos");

//Eliminar el primer elemento
var eliminarPrimero = frutas.shift("Bananos");


//Saber posicion de un elemento
var posicion = frutas.indexOf("peras")
console.log(posicion);