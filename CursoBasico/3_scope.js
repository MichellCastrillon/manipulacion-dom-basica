//scope global
//todas las variables que esten fuera de la funciones , general

//scope local
//solo lo que este dentro de la función lo usará

var miNombre = "Michell";

function nombre(){
    var miApellido = "Castrillón"
    console.log(miNombre+" "+miApellido)
    // console.log(`${miNombre} ${miApellido}`)
}
nombre();