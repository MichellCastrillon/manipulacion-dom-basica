var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// for(var i =0; i < estudiantes.length; i++){
//     saludarEstudiantes(estudiantes[i])
// }

//otra forma parar recorrer el array con eun for

// for(var estudiante of estudiantes){
//     saludarEstudiantes(estudiante);
// }


//==========================WHILE=============================

while (estudiantes.length>0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}
