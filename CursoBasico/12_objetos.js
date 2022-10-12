// var miAuto = {
//     marca: "Toyota",
//     modelo: "corrolla",
//     año: 2020,
//     detalleDelAuto: function(){
//         console.log(`Auto ${this.modelo} ${this.año}`)
//     }
// };
// miAuto.detalleDelAuto();
//this hace referencia al objeto en este caso miAuto

//============GENERAR OBJETOS===============

//Funcion constructora
function auto(marca,modelo,año){
    //igualo al parametro ingresado en la funcion
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
//instancias de la funcion constructora
var autoNuevo = new auto("toyota","2000",2005)
console.log(autoNuevo)